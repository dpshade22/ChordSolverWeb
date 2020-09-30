const noteArray = ["A","B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G"];

const dictionaryNotes = {
	"A###": 0, "B#": 0, "C":0, "Dbb": 0, 
	"B##": 1, "C#": 1, "Db": 1, "Ebbb": 1, 
	"B###": 2, "C##": 2, "D": 2, "Ebb": 2, "Fbbb": 2, 
	"C###": 3, "D#": 3, "Eb": 3, "Fbb": 3, 
	"D##": 4, "E": 4, "Fb": 4, "Gbbb":4, 
	"E#": 5, "F": 5, "Gbb": 5, 
	"E##": 6, "F#": 6, "Gb": 6, "Abbb": 6, 
	"F##": 7, "G": 7, "Abb": 7,
	"F###": 8, "G#": 8, "Ab": 8, "Bbbb": 8, 
	"G##": 9, "A": 9, "Bbb": 9, "Cbbb": 9, 
	"G###": 10, "A#": 10, "Bb": 10, "Cbb":10, 
	"A##": 11, "B": 11, "Cb": 11, "Dbbb":11,
}

const baseNotes = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6};

// Using data structures to our advantage
const intervals = {
    1: [
        { name: "Diminished 2nd", value: 0 },
        { name: "Minor 2nd", value: 1 },
        { name: "Major 2nd", value: 2 },
        { name: "Augmented 2nd", value: 3 },
        { name: "Doubly Augmented 2nd", value: 4 },
    ],
    2: [
        { name: "Doubly Diminished 3rd", value: 1 },
        { name: "Diminished 3rd", value: 2 },
        { name: "Minor 3rd", value: 3 },
        { name: "Major 3rd", value: 4 },
        { name: "Augmented 3rd", value: 5 },
        { name: "Doubly Augmented 3rd", value: 6 },
    ],
    3: [
        { name: "Doubly Diminished 4th", value: 3 },
        { name: "Diminished 4th", value: 4 },
        { name: "Perfect 4th", value: 5 },
        { name: "Augmented 4th", value: 6 },
        { name: "Doubly Augmented 4th", value: 7 },
    ],
    4: [
        { name: "Doubly Diminished 5th", value: 5 },
        { name: "Diminished 5th", value: 6 },
        { name: "Perfect 5th", value: 7 },
        { name: "Augmented 5th", value: 8 },
        { name: "Doubly Augmented 5th", value: 9 },
    ],
    5: [
        { name: "Doubly Diminished 6th", value: 6 },
        { name: "Diminished 6th", value: 7 },
        { name: "Minor 6th", value: 8 },
        { name: "Major 6th", value: 9 },
        { name: "Augmented 6th", value: 10 },
        { name: "Doubly Augmented 6th", value: 11 },
    ],
    6: [
        { name: "Doubly Diminished 7th", value: 8 },
        { name: "Diminished 7th", value: 9 },
        { name: "Minor 7th", value: 10 },
        { name: "Major 7th", value: 11 },
        { name: "Augmented 7th", value: 12 },
        //{ name: "Doubly Augmented 7th", value: 5 },
    ],
}

const threeNoteChords = {
    "Major 3rd": {
        "Minor 3rd": { name: "Major", inversion: null },
        "Major 3rd": { name: "Augmented", inversion: null },
        "Perfect 4th": { name: "Minor", inversion: "First" },
    },
    "Minor 3rd": {
        "Major 3rd": { name: "Minor", inversion: null },
        "Minor 3rd": { name: "Diminished", inversion: null },
        "Perfect 4th": { name: "Major", inversion: "First" },
        "Augmented 4th": { name: "Diminished", inversion: "First" },
    },
    "Perfect 4th": {
        "Major 3rd": { name: "Major", inversion: "Second" },
        "Minor 3rd": { name: "Minor", inversion: "Second" },
    },
    "Augmented 4th": {
        "Minor 3rd": { name: "Diminished", inversion: "Second" },
    },
    "Diminished 4th": {
        "Major 3rd": { name: "Augmented", inversion: "Second" },
    },
}

const fourNoteChords = {
    "Major 3rd": {
        "Minor 3rd": {
            "Minor 3rd": { name: "Major Minor 7", inversion: null },
            "Major 3rd": { name: "Major 7", inversion: null },
            "Major 2nd": { name: "Minor 7th", inversion: "First" },
        },
        "Minor 2nd": {
            "Minor 3rd": { name: "Minor Major 7th", inversion: "Second" },
            "Major 3rd": { name: "Major 7th", inversion: "Second" },
        },
        "Major 3rd": {
            "Minor 3rd": { name: "Half Diminished 7th", inversion: "Second" },
            "Minor 2nd": { name: "Minor Major 7th", inversion: "First" },
        }
    },
    "Minor 3rd": {
        "Major 3rd": {
            "Minor 3rd": { name: "Minor 7", inversion: null },
            "Major 3rd": { name: "Minor Major 7", inversion: null },
            "Minor 2nd": { name: "Major 7th", inversion: "First" },
            "Major 2nd": { name: "Half Diminished 7th", inversion: "First" },
        },
        "Minor 3rd": {
            "Major 2nd": { name: "Major Minor 7th", inversion: "First" },
            "Minor 3rd": { name: "Fully Diminished 7", inversion: null },
            "Augmented 2nd": { name: "Fully Diminished 7th", inversion: "First" },
            "Major 3rd": { name: "Half Diminished 7th", inversion: null },
        },
        "Major 2nd": {
            "Major 3rd": { name: "Major Minor 7th", inversion: "Second" },
            "Minor 3rd": { name: "Minor 7th", inversion: "Second" },
        },
        "Augmented 2nd": { name: "Fully Diminished 7th", inversion: "Second" },
    },
    "Major 2nd": {
        "Minor 3rd": {
            "Major 3rd": { name: "Minor 7th", inversion: "Third" },
            "Minor 3rd": { name: "Half Diminished 7th", inversion: "Third" },
        },
        "Major 3rd": {
            "Minor 3rd": { name: "Major Minor 7", inversion: "Third" },
        },
    },
    "Minor 2nd": {
        "Major 3rd": {
            "Minor 3rd": { name: "Major 7th", inversion: "Third" },
        },
        "Minor 3rd": {
            "Major 3rd": { name: "Minor Major 7th", inversion: "Third" },
        },
    },
    "Augmented 2nd": {
        "Minor 3rd": {
            "Minor 3rd": { name: "Fully Diminished 7th", inversion: "Third" },
        },
    }	
}

export const Resources = {
    noteArray,
    baseNotes,
    dictionaryNotes,
    intervals,
    threeNoteChords,
    fourNoteChords,
};
