pipeline{
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerapp = docker.build("raqueldesa/jenkins-docker:${env.BUILD_ID}", '-f Dockerfile .')
                }
                echo 'Building docker image...'
            }
        }
        stage('Push Docker Image') {
            steps {
                echo 'Pushing docker image...'
                script{
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        dockerapp.push('latest')
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
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