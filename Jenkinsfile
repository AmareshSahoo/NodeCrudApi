pipeline {
  agent any
  tools {nodejs "node" }
  stages {
    stage('Cloning Git') {
      steps {
        echo 'Cloning Git...'
        git 'https://github.com/AmareshSahoo/NodeCrudApi.git'
      }
    }
    stage('Build') {
       steps {
         echo 'Build In Progress...'
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        echo 'Testing Complete...'
      }
    }
  }
}