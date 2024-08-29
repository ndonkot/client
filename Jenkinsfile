#!groovy
pipeline {
    agent any
    tools {
        nodejs 'nodejs-22.7.0'  // Use the name configured in Jenkins for NodeJS
    }
    environment {
        // Define Docker Hub credentials ID
        DOCKER_CREDENTIALS_ID = 'dockerhub'
        // Define Docker image name and tag
        DOCKER_IMAGE = 'ndonkot84/my-angular-app'
        DOCKER_TAG = 'latest'
     }
    stages {
        stage('Build Angular App') {
            steps {
                echo 'Building Angular application...'
                script {
                    sh 'npm install'
                    sh 'ng build --prod'
                }
            }
        }
    
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                dockerImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}", ".")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                echo 'Pushing Docker image to Docker Hub...'
                script {
                   docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        dockerImage.push()
                   }
                }
            }
        }
        stage('Test Kubernetes Connection') {
            steps {
                echo 'Testing Kubernetes connection...'
                script {
                    sh 'kubectl get namespaces'
                }
            }
        }
        stage('Deploy') {
            steps {
              echo 'Deploying to Kubernetes...'
                script {
                    // Apply Kubernetes manifests
                    sh 'kubectl apply -f angular-app-deployment.yaml'
                    sh 'kubectl apply -f angular-app-service.yaml'
                }
            }
        }
    }
}
