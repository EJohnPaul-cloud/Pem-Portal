// Get references to HTML elements
const uploadButton = document.getElementById('upload-button');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const documentsContainer = document.getElementById('documents-container');
const loadingMessage = document.getElementById('loading-message');

// Sample document data
let documents = [
  {
    title: 'Example Document Title',
    course: 'CSC101',
    department: 'Computer Science',
    description: 'This is an example description.',
    uploadedDate: '2025-01-15'
  }
];

// Function to render documents
function renderDocuments() {
  documentsContainer.innerHTML = ''; // Clear existing documents
  documents.forEach((document, index) => {
    const documentHTML = `
      <div class="document-item">
        <h3>${document.title}</h3>
        <p>Course: ${document.course} - Department: ${document.department}</p>
        <p>Description: ${document.description}</p>
        <p class="uploaded-date">Uploaded: ${document.uploadedDate}</p>
        <div class="actions">
          <button class="view-details-button" onclick="viewDocumentDetails(${index})">View Details</button>
          <button class="delete-button" onclick="deleteDocument(${index})">Delete</button>
        </div>
      </div>
    `;
    documentsContainer.insertAdjacentHTML('beforeend', documentHTML);
  });
}

// Function to handle document upload
function handleUpload() {
  // For demonstration purposes, add a new document
  const newDocument = {
    title: 'New Document',
    course: 'CSC102',
    department: 'Computer Science',
    description: 'This is a new document.',
    uploadedDate: new Date().toISOString().split('T')[0]
  };
  documents.push(newDocument);
  renderDocuments();
}

// Function to handle search
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredDocuments = documents.filter(document => {
    return document.title.toLowerCase().includes(searchTerm) ||
           document.course.toLowerCase().includes(searchTerm) ||
           document.department.toLowerCase().includes(searchTerm) ||
           document.description.toLowerCase().includes(searchTerm);
  });
  documentsContainer.innerHTML = ''; // Clear existing documents
  if (filteredDocuments.length > 0) {
    filteredDocuments.forEach((document, index) => {
      const documentHTML = `
        <div class="document-item">
          <h3>${document.title}</h3>
          <p>Course: ${document.course} - Department: ${document.department}</p>
          <p>Description: ${document.description}</p>
          <p class="uploaded-date">Uploaded: ${document.uploadedDate}</p>
          <div class="actions">
            <button class="view-details-button" onclick="viewDocumentDetails(${index})">View Details</button>
            <button class="delete-button" onclick="deleteDocument(${index})">Delete</button>
          </div>
        </div>
      `;
      documentsContainer.insertAdjacentHTML('beforeend', documentHTML);
    });
  } else {
    documentsContainer.innerHTML = '<p>No documents found.</p>';
  }
}

// Function to view document details
function viewDocumentDetails(index) {
  const document = documents[index];
  alert(`Title: ${document.title}\nCourse: ${document.course}\nDepartment: ${document.department}\nDescription: ${document.description}\nUploaded: ${document.uploadedDate}`);
}

// Function to delete a document
function deleteDocument(index) {
  documents.splice(index, 1);
  renderDocuments();
}

// Event listeners
uploadButton.addEventListener('click', handleUpload);
searchButton.addEventListener('click', handleSearch);

// Initial render
renderDocuments();