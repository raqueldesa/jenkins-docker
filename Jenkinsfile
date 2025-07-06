pipeline {
    agent any

    environment {
        IMAGE_TAG = "raqueldesa/jenkins-docker:${env.BUILD_ID}"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Build: Instalando dependências no container...'
                script {
                    docker.build('build-image', '-f Dockerfile.build .')
                }
            }
        }

        stage('Testes') {
            steps {
                echo 'Executando testes no container...'
                script {
                    def testImage = docker.build('test-image', '-f Dockerfile.test .')
                    bat "docker run --rm test-image npm test"
                }
            }
        }


        stage('Pushing to DockerHub') {
            when {
                expression { return currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo 'Push da imagem para o DockerHub...'
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        def appImage = docker.build("${IMAGE_TAG}", '-f Dockerfile .')
                        appImage.push('latest')
                        appImage.push("${env.BUILD_ID}")
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build e testes finalizados com sucesso!'
        }
        unstable {
            echo 'Build foi instável (falha nos testes).'
        }
        failure {
            echo 'Erro no processo de build.'
        }
    }
}
