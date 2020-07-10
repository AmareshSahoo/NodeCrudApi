pipeline {
    agent {
        docker {
            image 'node:6-alpine'
	    label 'my-defined-label'			
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
