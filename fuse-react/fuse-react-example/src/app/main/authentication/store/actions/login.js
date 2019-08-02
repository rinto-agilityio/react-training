import firebaseService from '../../../../services/firebaseService'

export const SIGN_IN = '[AUTHENTICATION] SIGN_IN'

export function loginWithFirebase() {
  const request = firebaseService.signInWithEmailAndPassword()

  return dispatch =>
    request.then(data => {
      console.log('data', data)
      return (
        dispatch({
          type: SIGN_IN,
          payload: data,
        })
      )
    }
    )
}
