const mongoose = require("mongoose");
const slugify = require("slugify");

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    metaDescription: {
      type: String,
      trim: true,
      maxlength: 160,
      default: "",
    },

    content: {
      type: String,
      trim: true,
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

    canonicalUrl: {
      type: String,
      trim: true,
    },

    permalink: {
      type: String,
    },

    pageLink: {
      type: String,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    pageContributor: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    parentPage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
      default: null, // For nested pages
    },

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
        imageWidth: { type: Number, default: 0 },
        imageHeight: { type: Number, default: 0 },
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

    relatedPages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Page",
      },
    ],

    focusKeywords: [
      {
        type: String,
        trim: true,
      },
    ],

    nextPage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
    }, // Next page in series

    previousPage: {
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
pageSchema.pre("validate", function (next) {
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
  if (this.permalink && !this.pageLink) {
    const baseUrl = process.env.BASE_URL || "https://www.inventnexus.com";
    this.pageLink = `${baseUrl}/${this.permalink}`;
  }

  // Generate canonicalURL based on permalink
  if (this.permalink && !this.canonicalUrl) {
    const baseUrl = process.env.BASE_URL || "https://www.inventnexus.com";
    this.canonicalUrl = `${baseUrl}/${this.permalink}`;
  }

  // Basic schema markup without async
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

// Create and export the User model
const Page = mongoose.model("Page", pageSchema);
module.exports = Page;
