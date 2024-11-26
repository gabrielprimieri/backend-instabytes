# Habilita os serviços Cloud Run, Cloud Build e Artifact Registry para o projeto atual, 
# permitindo a execução de aplicações em contêineres, construção automatizada e gerenciamento de artefatos.
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable artifactregistry.googleapis.com