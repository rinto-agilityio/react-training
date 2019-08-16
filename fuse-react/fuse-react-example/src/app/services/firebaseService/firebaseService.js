import firebase from 'firebase/app'
import config from './firebaseServiceConfig'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

class firebaseService {
  init() {
    if (firebase.apps.length) {
      return
    }
    firebase.initializeApp(config)
    this.db = firebase.database()
    this.auth = firebase.auth()
    this.dbFileStore = firebase.firestore()
  }

  mapDocumentToEntity = doc => ({ id: doc.id, ...doc.data() })

  mapCollectionToEntities = collection =>
    collection.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  getTodosData = () => {
    if (!firebase.apps.length) {
      return
    }
    const todoCollection = this.dbFileStore.collection('todos')
    return todoCollection
      .get()
      .then(this.mapCollectionToEntities)
      .catch(error => error)
  }

  getLabelsData = () => {
    const labelsCollection = this.dbFileStore.collection('labels')
    return labelsCollection
      .get()
      .then(this.mapCollectionToEntities)
      .catch(error => error)
  }

  getFoldersData = () => {
    const foldersCollection = this.dbFileStore.collection('folders')
    return foldersCollection
      .get()
      .then(this.mapCollectionToEntities)
      .catch(error => error)
  }

  getFiltersData = () => {
    const filtesrCollection = this.dbFileStore.collection('filters')
    return filtesrCollection
      .get()
      .then(this.mapCollectionToEntities)
      .catch(error => error)
  }

  addNewTodoData = data => {
    const todoCollection = this.dbFileStore.collection('todos')
    return todoCollection
      .add(data)
      .then(docRef => {
        return { ...data, id: docRef.id }
      })
      .catch(error => error)
  }

  // Update data
  updateTodoItemData = data => {
    const todoRef = this.dbFileStore.collection('todos').doc(data.id)
    return todoRef
      .update(data)
      .then(() => data)
      .catch(error => error)
  }

  // Delete data
  deleteTodoItemData = data => {
    const todoRef = this.dbFileStore.collection('todos').doc(data.id)
    return todoRef
      .delete()
      .then(() => data)
      .catch(error => error)
  }

  getUserData = userId => {
    if (!firebase.apps.length) {
      return
    }
    return new Promise((resolve, reject) => {
      this.db
        .ref(`users/${userId}`)
        .once('value')
        .then(snapshot => {
          const user = snapshot.val()
          resolve(user)
        })
    })
  }

  updateUserData = user => {
    if (!firebase.apps.length) {
      return
    }
    return this.db.ref(`users/${user.uid}`).set(user)
  }

  onAuthStateChanged = callback => {
    if (!this.auth) {
      return
    }
    this.auth.onAuthStateChanged(callback)
  }

  signOut = () => {
    if (!this.auth) {
      return
    }
    this.auth.signOut()
  }
}

const instance = new firebaseService()

export default instance
