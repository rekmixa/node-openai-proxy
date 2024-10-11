# node-openai-proxy

## Installation

Create .env file. You need to edit it

```bash
make cp-env
```

Start docker-container

```bash
make up
```

## Dotenv configuration:

`DOMAIN` - Domain of proxy (your domain)
`API_KEY` - OpenAI API-key

## Usage

`https://${DOMAIN}/v1` - that URL you need to use as URL of OpenAI API
