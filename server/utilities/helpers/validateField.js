// Validate array fields
const validateAllowedField = (field, fieldName, allowedValues) => {
  if (field) {
    if (allowedValues && !allowedValues.includes(field)) {
      throw new Error(
        `${fieldName} must be one of the following: ${allowedValues.join(", ")}`
      );
    }
  }
  return true;
};

const validateArrayField = (field, fieldName, fieldType) => {
  const validateNestedArray = (array, depth = 0, parentIndex) => {
    if (!Array.isArray(array)) {
      throw new Error(
        `${fieldName} at depth ${depth} (${parentIndex.join(
          " -> "
        )}) must be an array.`
      );
    }

    array.forEach((item, index) => {
      const currentIndex = [...parentIndex, index];
      if (Array.isArray(item)) {
        // Recursively validate nested arrays
        validateNestedArray(item, depth + 1, currentIndex);
      } else if (typeof item !== fieldType) {
        throw new Error(
          `${item} in ${fieldName} at depth ${depth} (${currentIndex.join(
            " -> "
          )}) should be of type ${fieldType}.`
        );
      }
    });
  };

  if (field) {
    if (!Array.isArray(field)) {
      throw new Error(`${fieldName} must be an array.`);
    }
    // Start recursive validation
    validateNestedArray(field, 0, []);
  }
  return true; // Validation successful
};

const validateAndNormalizeArrayField = (field, fieldName, fieldType) => {
  if (field) {
    if (!Array.isArray(field)) {
      throw new Error(`${fieldName} must be an array.`);
    }

    // Normalize the array (handle flat arrays and nested arrays)
    const normalizeArray = (arr) => {
      if (arr.length === 0) return [[]]; // Ensure empty arrays are normalized as a single empty nested array
      return arr.every((item) => typeof item === fieldType) ? [arr] : arr;
    };

    const normalizedField = normalizeArray(field);

    // Validate each element in the normalized array
    normalizedField.forEach((subArray, subIndex) => {
      if (!Array.isArray(subArray)) {
        throw new Error(
          `${fieldName} must contain only nested arrays or flat values.`
        );
      }

      subArray.forEach((item, index) => {
        if (typeof item !== fieldType) {
          throw new Error(
            `Element "${item}" in ${fieldName} at [${subIndex}][${index}] should be of type ${fieldType}.`
          );
        }
      });
    });

    return normalizedField; // Return normalized array if validation is successful
  }

  return [[]]; // Return a default normalized empty nested array if the field is not provided
};

// Validate type specific fields
const validateField = (field, fieldName, fieldType) => {
  if (field && typeof field !== fieldType) {
    throw new Error(`${fieldName} should be a ${fieldType}`);
  }
  return true;
};

// Validate required fields
const validateRequiredField = (field, fieldName, fieldType) => {
  if (!field || typeof field !== fieldType) {
    throw new Error(`${fieldName} is required and should be a ${fieldType}`);
  }
  return true;
};

// Validate email field
const validateEmail = (email) => {
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error(`Invalid email: ${email}`);
    }
  }
  return true;
};

// Password validation strength
const validatePassword = (password) => {
  if (password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new Error(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
      );
    }
  }
  return true;
};

module.exports = {
  validateEmail,
  validatePassword,
  validateRequiredField,
  validateField,
  validateAndNormalizeArrayField,
  validateArrayField,
  validateAllowedField,
};
