export function getAuth() {
  return ['admin']
}

export function checkAuth(auth) {
  const current = getAuth()

  return current.some(item => auth.includes(item))
}