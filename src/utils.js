// Your code here
export function currentAgeForBirthYear(birthYear) {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // Return the difference between current year and birth year
  return currentYear - birthYear;
}
