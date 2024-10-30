const mongoose = require("mongoose");
const slugify = require("slugify");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150, // SEO-friendly title length
    },

    content: {
      type: String,
      required: true,
    },

    keyTakeAway: {
      type: String,
      trim: true,
      maxlength: 200,
    },

    summary: {
      type: String,
      trim: true,
      maxlength: 300,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    parentPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      default: null, // For nested posts
    },

    permalink: {
      type: String,
    },

    postLink: {
      type: String,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    postContributor: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    metaDescription: {
      type: String,
      trim: true,
      maxlength: 160,
    },

    focusKeywords: [
      {
        type: String,
        trim: true,
      },
    ],

    status: {
      type: String,
      enum: [
        "draft",
        "published",
        "archived",
        "review",
        "reviewed",
        "rejected",
      ],
      default: "draft",
    },

    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],

    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    likesCount: {
      type: Number,
      default: 0,
    },

    dislikesCount: {
      type: Number,
      default: 0,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

    commentsCount: {
      type: Number,
      default: 0,
    },

    coverImage: [
      {
        imageUrl: { type: String, default: "" },
        imageAltText: { type: String, trim: true, default: "" },
        imageThumbnail: { type: String, default: "" },
        imageWidth: { type: Number, default: 0 },
        imageHeight: { type: Number, default: 0 },
      },
    ],

    featuredImage: [
      {
        imageUrl: { type: String, default: "" },
        imageAltText: { type: String, trim: true, default: "" },
        imageThumbnail: { type: String, default: "" },
        imageWidth: { type: Number, default: 0 },
        imageHeight: { type: Number, default: 0 },
      },
    ],

    postOtherImages: [
      {
        imageUrl: { type: String, default: "" },
        imageAltText: { type: String, trim: true, default: "" },
        imageThumbnail: { type: String, default: "" },
        imageWidth: { type: Number, default: 0 },
        imageHeight: { type: Number, default: 0 },
      },
    ],

    featuredVideo: [
      {
        videoUrl: { type: String, default: "" },
        videoAltText: { type: String, trim: true, default: "" },
        videoThumbnail: { type: String, default: "" },
        videoWidth: { type: Number, default: 0 },
        videoHeight: { type: Number, default: 0 },
      },
    ],

    schemaMarkup: {
      type: Object,
      default: {
        "@context": "http://schema.org",
        "@type": "Article",
        headline: "",
        image: "",
        author: {
          "@type": "Person",
          name: "",
        },
        datePublished: "",
        dateModified: "",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "",
        },
      },
    },

    social: {
      linkedinTitle: { type: String, trim: true },
      linkedinDescription: { type: String, trim: true },
      facebookTitle: { type: String, trim: true },
      facebookDescription: { type: String, trim: true },
      twitterTitle: { type: String, trim: true },
      twitterDescription: { type: String, trim: true },
      ogImage: { type: String },
    },

    breadcrumbList: [
      {
        "@type": { type: String, default: "ListItem" },
        position: { type: Number },
        name: { type: String, trim: true },
        item: { type: String }, // URL of each breadcrumb item
      },
    ],

    relatedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Page",
      },
    ],

    nextPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
    }, // Next page in series

    previousPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
    }, // Previous page in series

    lastModifiedDate: {
      type: Date,
      default: Date.now,
    },

    publishDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to automatically generate slug, permalink, postLink amd readTime
postSchema.pre("validate", function (next) {
  // Generate slug
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true, // Remove special characters
    });
  }

  // Generate permalink based on slug
  if (this.slug && !this.permalink) {
    this.permalink = `${this.slug}`;
  }

  // Generate postLink based on permalink
  if (this.permalink && !this.postLink) {
    const baseUrl = process.env.BASE_URL || "https://www.inventnexus.com";
    this.postLink = `${baseUrl}/${this.permalink}`;
  }

  // Generate readTime automatically
  if (this.content && !this.readTime) {
    const words = this.content.split(" ").length;
    // Estimate based on 200 words per minute
    this.readTime = Math.ceil(words / 200);
  }

  //  schema markup 
  this.schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: this.title || "",
    description: this.metaDescription || "",
    image: this.coverImage.length > 0 ? this.coverImage[0].imageUrl : "",
    datePublished: this.publishDate || undefined,
    dateModified: this.lastModifiedDate || new Date(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": this.permalink ? `${process.env.BASE_URL}/${this.permalink}` : "",
    },
    breadcrumb: this.breadcrumbList.map((crumb, index) => ({
      "@type": "ListItem",
      position: crumb.position || index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  next();
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
