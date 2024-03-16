import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { JSON_URL } from "../utils/util";

// Define an async thunk action creator to handle document creation
export const createDocument = createAsyncThunk(
  "documents/create",
  async (documentData) => {
    try {
      const response = await axios.post(`${JSON_URL}/documents`, documentData);
      return response.data; // Return the created document data
    } catch (error) {
      throw error; // Throw an error if document creation fails
    }
  }
);
export const fetchDocuments = createAsyncThunk(
  "documents/fetch",
  async (documentData) => {
    try {
      const response = await axios.get(`${JSON_URL}/documents`, documentData);
      return response.data; // Return the created document data
    } catch (error) {
      throw error; // Throw an error if document creation fails
    }
  }
);
export const deleteDocument = createAsyncThunk(
  "documents/delete",
  async (documentId) => {
    try {
      if (documentId) {
        const response = await axios.delete(
          `${JSON_URL}/documents/${documentId}`
        );
        console.log("Document Delted!:", response.data);
        return documentId;
      } else {
        console.log("Document Id not found!");
      }
    } catch (error) {
      console.log("Error updating document:", error);
    }
  }
);

// Define the initial state for the documents slice
const initialState = {
  status: "idle", // Status can be "idle", "loading", "succeeded", or "failed"
  error: null, // Error message if document creation fails
};

// Define the documents slice with reducers for updating state based on action types
const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createDocument.pending, (state) => {
        state.status = "loading"; // Set status to loading while creating the document
        state.error = null; // Clear any previous error messages
      })
      .addCase(createDocument.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set status to succeeded after creating the document
        state.error = null; // Clear any previous error messages
      })
      .addCase(createDocument.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed if document creation fails
        state.error = action.error.message; // Set the error message from the action payload
      })
      .addCase(fetchDocuments.pending, (state) => {
        state.status = "loading"; // Set status to loading while fetching documents
        state.error = null; // Clear any previous error messages
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set status to succeeded after fetching documents
        state.error = null; // Clear any previous error messages
        state.data = action.payload; // Update the data array with fetched documents
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed if fetching documents fails
        state.error = action.payload; // Set the error message from the action payload
      })
      .addCase(deleteDocument.pending, (state) => {
        state.status = "loading"; // Set status to loading while deleting the document
        state.error = null; // Clear any previous error messages
      })
      .addCase(deleteDocument.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set status to succeeded after deleting the document
        state.error = null; // Clear any previous error messages
        // Remove the deleted document from the state data array (if needed)
        state.data = state.data.filter((doc) => doc.id !== action.payload);
      })
      .addCase(deleteDocument.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed if document deletion fails
        state.error = action.payload; // Set the error message from the action payload
      });
    // },
  },
});

export default documentsSlice.reducer;
