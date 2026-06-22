# RESTFUL-API-DEVELOPMENT

## Description

A RESTful API for managing books in a library system.

## Installation

npm install

npm start

Server runs on:

http://localhost:3000

# Endpoints

## Get All Books

GET /books

Response:

[
  {
    "id": 1,
    "title": "Python Basics",
    "author": "John Smith"
  }
]

## Get Book By ID

GET /books/1

## Create Book

POST /books

Body:

{
  "title": "Java Programming",
  "author": "James"
}

## Update Book

PUT /books/1

Body:

{
  "title": "Updated Title",
  "author": "Updated Author"
}

## Delete Book

DELETE /books/1

Response:

{
  "message": "Book deleted"
}
