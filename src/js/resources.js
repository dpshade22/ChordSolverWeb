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
const Intervals = {
    1: [
        { name: "Diminished 2nd", value: 0 },
        { name: "m2", value: 1 },
        { name: "M2", value: 2 },
        { name: "Augmented 2nd", value: 3 },
        { name: "Doubly Augmented 2nd", value: 4 },
    ],
    2: [
        { name: "Doubly Diminished 3rd", value: 1 },
        { name: "Diminished 3rd", value: 2 },
        { name: "m3", value: 3 },
        { name: "M3", value: 4 },
        { name: "Augmented 3rd", value: 5 },
        { name: "Doubly Augmented 3rd", value: 6 },
    ],
    3: [
        { name: "Doubly Diminished 4th", value: 3 },
        { name: "Diminished 4th", value: 4 },
        { name: "P4", value: 5 },
        { name: "Augmented 4th", value: 6 },
        { name: "Doubly Augmented 4th", value: 7 },
    ],
    4: [
        { name: "Doubly Diminished 5th", value: 5 },
        { name: "Diminished 5th", value: 6 },
        { name: "P5", value: 7 },
        { name: "Augmented 5th", value: 8 },
        { name: "Doubly Augmented 5th", value: 9 },
    ],
    5: [
        { name: "Doubly Diminished 6th", value: 6 },
        { name: "Diminished 6th", value: 7 },
        { name: "m6", value: 8 },
        { name: "M6", value: 9 },
        { name: "Augmented 6th", value: 10 },
        { name: "Doubly Augmented 6th", value: 11 },
    ],
    6: [
        { name: "Doubly Diminished 7th", value: 8 },
        { name: "Diminished 7th", value: 9 },
        { name: "m7", value: 10 },
        { name: "M7", value: 11 },
        { name: "Augmented 7th", value: 12 },
        //{ name: "Doubly Augmented 7th", value: 5 },
    ],
}

const threeNoteChords = {
    "M3": {
        "m3": { name: "Major", inversion: null },
        "M3": { name: "Augmented", inversion: null },
        "P4": { name: "Minor", inversion: "First" },
    },
    "m3": {
        "M3": { name: "Minor", inversion: null },
        "m3": { name: "Diminished", inversion: null },
        "P4": { name: "Major", inversion: "First" },
        "Augmented 4th": { name: "Diminished", inversion: "First" },
    },
    "P4": {
        "M3": { name: "Major", inversion: "Second" },
        "m3": { name: "Minor", inversion: "Second" },
    },
    "Augmented 4th": {
        "m3": { name: "Diminished", inversion: "Second" },
    },
    "Diminished 4th": {
        "M3": { name: "Augmented", inversion: "Second" },
    },
}

const fourNoteChords = {
    "M3": {
        "m3": {
            "m3": { name: "Major Minor 7", inversion: null },
            "M3": { name: "Major 7", inversion: null },
            "M2": { name: "Minor 7th", inversion: "First" },
        },
        "m2": {
            "m3": { name: "Minor Major 7th", inversion: "Second" },
            "M3": { name: "Major 7th", inversion: "Second" },
        },
        "M3": {
            "m3": { name: "Half Diminished 7th", inversion: "Second" },
            "m2": { name: "Minor Major 7th", inversion: "First" },
        }
    },
    "m3": {
        "M3": {
            "m3": { name: "Minor 7", inversion: null },
            "M3": { name: "Minor Major 7", inversion: null },
            "m2": { name: "Major 7th", inversion: "First" },
            "M2": { name: "Half Diminished 7th", inversion: "First" },
        },
        "m3": {
            "M2": { name: "Major Minor 7th", inversion: "First" },
            "m3": { name: "Fully Diminished 7", inversion: null },
            "Augmented 2nd": { name: "Fully Diminished 7th", inversion: "First" },
            "M3": { name: "Half Diminished 7th", inversion: null },
        },
        "M2": {
            "M3": { name: "Major Minor 7th", inversion: "Second" },
            "m3": { name: "Minor 7th", inversion: "Second" },
        },
        "Augmented 2nd": { name: "Fully Diminished 7th", inversion: "Second" },
    },
    "M2": {
        "m3": {
            "M3": { name: "Minor 7th", inversion: "Third" },
            "m3": { name: "Half Diminished 7th", inversion: "Third" },
        },
        "M3": {
            "m3": { name: "Major Minor 7", inversion: "Third" },
        },
    },
    "m2": {
        "M3": {
            "m3": { name: "Major 7th", inversion: "Third" },
        },
        "m3": {
            "M3": { name: "Minor Major 7th", inversion: "Third" },
        },
    },
    "Augmented 2nd": {
        "m3": {
            "m3": { name: "Fully Diminished 7th", inversion: "Third" },
        },
    }	
}

export const Resources = {
    noteArray,
    baseNotes,
    dictionaryNotes,
    Intervals,
    threeNoteChords,
    fourNoteChords,
};
