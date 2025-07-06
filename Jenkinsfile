pipeline{
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building docker image...'
                // Add your build commands here
            }
        }
        stage('Push Docker Image') {
            steps {
                echo 'Testing...'
                // Add your test commands here
            }
        }
        stage('Deploy Application') {
           
            steps {
                echo 'Deploying...'
                // Add your deployment commands here
            }
        }
    }

    // post {
    //     always {
    //         echo 'This will always run after the pipeline completes.'
    //     }
    //     success {
    //         echo 'This will run only if the pipeline succeeds.'
    //     }
    //     failure {
    //         echo 'This will run only if the pipeline fails.'
    //     }
    // }
}