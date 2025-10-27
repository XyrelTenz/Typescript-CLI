enum Role {
  Admin,
  Teacher,
  Student,
}

function checkRoles(role: Role): string {
  if (role == 0) {
    return "Admin";
  } else if (role == 1) {
    return "Teacher";
  } else if (role == 2) {
    return "Student";
  } else {
    return "Role not Avail";
  }
}

export function getRole(role: Role): string {
  return checkRoles(role).toString();
}
