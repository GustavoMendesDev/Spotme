export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateName = (name) => {
  return name.trim().length >= 2
}

export const validateRequired = (value) => {
  return value.trim().length > 0
}
