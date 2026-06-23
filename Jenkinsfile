pipeline {
  agent any
  environment {
    CI = 'true'
  }
  stages {
    stage('Install') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm ci'
          } else {
            bat 'npm ci'
          }
        }
      }
    }
    stage('Install Playwright browsers') {
      steps {
        script {
          if (isUnix()) {
            sh 'npx playwright install --with-deps'
          } else {
            bat 'npx playwright install --with-deps'
          }
        }
      }
    }
    stage('Run tests') {
      steps {
        script {
          if (isUnix()) {
            sh 'npx playwright test --reporter=list,junit'
          } else {
            bat 'npx playwright test --reporter=list,junit'
          }
        }
      }
      post {
        always {
          archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
          junit 'test-results/**/*.xml'
        }
      }
    }
  }
}
