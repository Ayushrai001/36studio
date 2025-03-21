pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-app-image'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url'https://github.com/Ayushrai001/36studio'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Add your test steps here (e.g., run unit tests)
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        docker.image(DOCKER_IMAGE).push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Add deployment steps (e.g., SSH, Kubernetes, etc.)
                }
            }
        }
    }
}
