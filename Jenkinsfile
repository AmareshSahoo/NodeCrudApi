pipeline {
    agent {
        docker {
	    dockerfile true
	    label 'node'
            args '-p 3000:3000' 
        }
    }
    stages {
		stage('Cloning Git') {
		  steps {
			git 'https://github.com/AmareshSahoo/NodeCrudApi.git'
		  }
		}
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
