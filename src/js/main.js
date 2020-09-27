
function doAnswer() {
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	
	let personNotes = document.getElementById("search").value;
	
	personNotes = personNotes.trim()
	
	let inputList = personNotes.split(" ");

	if (inputList.length >= 2) {
		let aFront = inputList[0].charAt(0);
		let bFront = inputList[1].charAt(0);
		aFront = aFront.toUpperCase();
		bFront = bFront.toUpperCase();
		let aBack = inputList[0].substr(1, inputList[0].length + 1);
		let bBack = inputList[1].substr(1, inputList[0].length + 1);
		a = aFront + aBack;
		b = bFront + bBack; 
	}
	if (inputList.length >= 3) {
		let cFront = inputList[2].charAt(0);
		cFront = cFront.toUpperCase();
		let cBack = inputList[2].substr(1, inputList[0].length +1);
		c = cFront + cBack;
	}
	if (inputList.length === 4) {
		let dFront = inputList[3].charAt(0);
		dFront = dFront.toUpperCase();
		let dBack = inputList[3].substr(1, inputList[0].length + 1);
		d = dFront + dBack;
	}

	const DictionaryNotes = {
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

	const DicBaseNotes = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6};

	let Distance = 0;
					
	const Unison = 0;
	const dim2 = 0;
	const m2 = 1;
	const M2 = 2;
	const aug2 = 3;
	const doubaug2 = 4;
	const  doubdim3 = 1;
	const dim3 = 2;
	const  m3 = 3;
	const  M3 = 4;
	const  aug3 = 5;
	const  doubaug3 = 6;
	const  doubdim4 = 3;
	const  dim4 = 4;
	const  P4 = 5;
	const  aug4 = 6;
	const  doubaug4 = 7;
	const  doubdim5 = 5;
	const  dim5 = 6;
	const  P5 = 7;
	const  aug5 = 8;
	const  doubaug5 = 9;
	const  doubdim6 = 6;
	const  dim6 = 7;
	const  m6 = 8;
	const  M6 = 9;
	const  aug6 = 10;
	const  doubaug6 = 11;
	const  doubdim7 = 8;
	const  dim7 = 9;
	const  m7 = 10;
	const  M7 = 11;
	const  aug7 = 12;

	const Second = [dim2, m2, M2, aug2, doubaug2];
	const Third = [doubdim3, dim3, m3, M3, aug3, doubaug3];
	const Fourth = [doubdim4, dim4, P4, P4, aug4, doubaug4];
	const Fifth = [doubdim5, dim5, P5, P5, aug5, doubaug5];
	const Sixth = [doubdim6, dim6, m6, M6, aug6, doubaug6];
	const Seventh = [doubdim7, dim7, m7, M7, aug7]

	function interval(a, b) {
		let Interval = DictionaryNotes[a] - DictionaryNotes[b];
		if (DictionaryNotes[a] - DictionaryNotes[b] < 0) {
			Interval += 12;
			Interval = 12 - Interval;
		}
		else{
			Interval = 12 - Interval;
		}
		return Interval;
	}

	// if two notes function / identify interval

	function Identify_Interval(a, b) {

		if (DicBaseNotes[a[0]] > DicBaseNotes[b[0]]) {
			Distance = DicBaseNotes[a[0]]- (DicBaseNotes[b[0]] + 7);
		} else {
			Distance = DicBaseNotes[a[0]] - DicBaseNotes[b[0]];
		}

		Distance = Math.abs(Distance)

		let Finalint = 0

		if (Distance === 1) {
			for (i=0; i<=5; i++) {
				if (interval(a, b) === Second[i]){
					if (Second[i] === dim2){
						Finalint = "Diminished 2nd";}
					if (Second[i] === m2) {
						Finalint = "m2";}
					if (Second[i] === M2){
						Finalint = "M2";}
					if (Second[i] === aug2){
						Finalint = "Augmented 2nd";}	
					if (Second[i] === doubaug2){
						Finalint = "Doubly Augmented 2nd";}
				}			
			}
		}
		if (Distance === 2) {
			for (i = 0; i <=6; i++){	
				if (interval(a, b) === Third[i]){
					if (Third[i] === doubdim3) {
						Finalint = "Doubly Diminished 3rd";}
					if (Third[i] === dim3){
						Finalint = "Diminished 3rd";}
					if (Third[i] === m3){
						Finalint = "m3";}
					if (Third[i] === M3){
						Finalint = "M3";}
					if (Third[i] === aug3){
						Finalint = "Augmented 3rd";}
					if (Third[i] === doubaug3){
						Finalint = "Doubly Augmented 3rd";}
				}
			}
		}
		if (Distance === 3){
			for (i=0; i<=6; i++){	
				if (interval(a, b) === Fourth[i]){
					if (Fourth[i] === doubdim4){
						Finalint = "Doubly Diminished 4th";}
					if (Fourth[i] === dim4){
						Finalint = "Diminished 4th";}
					if (Fourth[i] === P4){
						Finalint = "P4";}
					if (Fourth[i] === aug4){
						Finalint = "Augmented 4th";}
					if (Fourth[i] === doubaug4){
						Finalint = "Doubly Augmented 4th";}
				}
			}
		}
		if (Distance === 4){
			for (i=0;i<=6;i++){			
				if (interval(a, b) === Fifth[i]){
					if (Fifth[i] === doubdim5){
						Finalint = "Doubly Diminished 5th";}
					if (Fifth[i] === dim5){
						Finalint = "Diminished 5th";}
					if (Fifth[i] === P5){
						Finalint = "P5";}
					if (Fifth[i] === aug5){
						Finalint = "Augmented 5th";}
					if (Fifth[i] === doubaug5){
						Finalint = "Doubly Augmented 5th";}
				}
			}     
		}
		if (Distance === 5){
			for (i=0;i<=6;i++){
				if (interval(a, b) === Sixth[i]){
					if (Sixth[i] === doubdim6){
						Finalint = "Doubly Diminished 6th";}
					if (Sixth[i] === dim6){
						Finalint = "Diminished 6th";}
					if (Sixth[i] === m6){
						Finalint = "m6";}
					if (Sixth[i] === M6){
						Finalint = "M6";}
					if (Sixth[i] === aug6){
						Finalint = "Augmented 6th";}
					if (Sixth[i] === doubaug6){
						Finalint = "Doubly Augmented 6th";}
				}
			}
		}
		if (Distance === 6) {
			for (i=0; i<=5; i++){
				if (interval(a, b) === Seventh[i]){
					if (Seventh[i] === doubdim7){
						Finalint = "Doubly Diminished 7th";}
					if (Seventh[i] === dim7){
						Finalint = "Diminished 7th";}
					if (Seventh[i] === m7){
						Finalint = "m7";}
					if (Seventh[i] === M7){
						Finalint = "M7";}
					if (Seventh[i] === aug7){
						Finalint = "Augmented 7th";}
				}
			}
		}	
		return Finalint;
	}

	// if triad function

	function Identify_Chord(a, b, c){
		
		
		
		
		if (Identify_Interval(a, b) === "M3"){
			if (Identify_Interval(b, c) === "m3"){
				document.getElementById("root").innerHTML = a;
				document.getElementById("third").innerHTML = b;
				document.getElementById("fifth").innerHTML = c;
				return (a + " Major")}
			if (Identify_Interval(b, c) === "M3"){
				document.getElementById("root").innerHTML = a;
				document.getElementById("third").innerHTML = b;
				document.getElementById("fifth").innerHTML = c;
				return (a + " Augmented");}
			if (Identify_Interval(b, c) === "P4"){
				document.getElementById("root").innerHTML = c;
				document.getElementById("third").innerHTML = a;
				document.getElementById("fifth").innerHTML = b;
				return (c + " Minor (First Inversion)");}
		}
			
		if (Identify_Interval(a, b) === "m3"){
			if (Identify_Interval(b, c) === "M3"){
				document.getElementById("root").innerHTML = a;
				document.getElementById("third").innerHTML = b;
				document.getElementById("fifth").innerHTML = c;
				return (a + " Minor");}
			if (Identify_Interval(b, c) === "m3"){
				document.getElementById("root").innerHTML = a;
				document.getElementById("third").innerHTML = b;
				document.getElementById("fifth").innerHTML = c;
				return (a + " Diminished");}
			if (Identify_Interval(b, c) === "P4"){
				document.getElementById("root").innerHTML = c;
				document.getElementById("third").innerHTML = a;
				document.getElementById("fifth").innerHTML = b;
				return (c + " Major (First Inversion)");}
			if (Identify_Interval(b, c) === "Augmented 4th"){
				document.getElementById("root").innerHTML = c;
				document.getElementById("third").innerHTML = a;
				document.getElementById("fifth").innerHTML = b;
				return (c + " Diminished (First Inversion)");}
		}
		
		if (Identify_Interval(a, b) === "P4"){
			if (Identify_Interval(b, c) === "M3"){
				document.getElementById("root").innerHTML = b;
				document.getElementById("third").innerHTML = c;
				document.getElementById("fifth").innerHTML = a;
				return (b + " Major (Second Inversion)")}		
			if (Identify_Interval(b, c) === "m3"){
				document.getElementById("root").innerHTML = b;
				document.getElementById("third").innerHTML = c;
				document.getElementById("fifth").innerHTML = a;
				return (b + " Minor (Second Inversion)")}
		}

		if (Identify_Interval(a, b) === "Augmented 4th"){
			if (Identify_Interval(b, c) === "m3"){
				document.getElementById("root").innerHTML = b;
				document.getElementById("third").innerHTML = c;
				document.getElementById("fifth").innerHTML = a;
				return (b + " Diminished (Second Inversion)");}
		}

		if (Identify_Interval(a, b) === "Diminished 4th"){
			if (Identify_Interval(b, c) === "M3"){
				document.getElementById("root").innerHTML = b;
				document.getElementById("third").innerHTML = c;
				document.getElementById("fifth").innerHTML = a;
				return (b + " Augmented (Second Inversion)");}
		}

	}

	// if seventh chord function

	function Identify_Chord_Seventh(a, b, c, d) {
	// (M3, m3 Chords)

		if (Identify_Interval(a, b) === "M3"){
			if (Identify_Interval(b, c) === "m3"){
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = a;
					document.getElementById("third").innerHTML = b;
					document.getElementById("fifth").innerHTML = c;
					document.getElementById("seventh").innerHTML = d;
					return (a + " Major Minor 7")}	
				if (Identify_Interval(c, d) === "M3"){
					document.getElementById("root").innerHTML = a;
					document.getElementById("third").innerHTML = b;
					document.getElementById("fifth").innerHTML = c;
					document.getElementById("seventh").innerHTML = d;
					return (a + " Major 7")	}
				if (Identify_Interval(c, d) === "M2"){
					document.getElementById("root").innerHTML = d;
					document.getElementById("third").innerHTML = a;
					document.getElementById("fifth").innerHTML = b;
					document.getElementById("seventh").innerHTML = c;
					return (d + " Minor 7th (First Inversion)")}
			}
		}
			
	// (M3, m2 Chords)	
		if (Identify_Interval(a, b) === "M3"){
			if (Identify_Interval(b, c) === "m2"){
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = c;
					document.getElementById("third").innerHTML = d;
					document.getElementById("fifth").innerHTML = a;
					document.getElementById("seventh").innerHTML = b;
					return (c + " Minor Major 7th (Second Inversion)")}		
				if (Identify_Interval(c, d) === "M3"){
					document.getElementById("root").innerHTML = c;
					document.getElementById("third").innerHTML = d;
					document.getElementById("fifth").innerHTML = a;
					document.getElementById("seventh").innerHTML = b;
					return (c + " Major 7th (Second Inversion)")}	
			}
		}

	// (M3, Misc. Chords)
		if (Identify_Interval(a, b) === "M3"){
			if (Identify_Interval(b, c) === "M2"){
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = c;
					document.getElementById("third").innerHTML = d;
					document.getElementById("fifth").innerHTML = a;
					document.getElementById("seventh").innerHTML = b;
					return (c + " Half Diminished 7th (Second Inversion)")}
				}
			if (Identify_Interval(b, c) === "M3"){
				if (Identify_Interval(c, d) === "m2"){
					document.getElementById("root").innerHTML = d;
					document.getElementById("third").innerHTML = a;
					document.getElementById("fifth").innerHTML = b;
					document.getElementById("seventh").innerHTML = c;
					return (d + " Minor Major 7th (First Inversion)")}
				}
		}		
														
	// (m3, M3 Chords)
		if (Identify_Interval(a, b) === "m3"){
			if (Identify_Interval(b, c) === "M3"){
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = a;
					document.getElementById("third").innerHTML = b;
					document.getElementById("fifth").innerHTML = c;
					document.getElementById("seventh").innerHTML = d;
					return (a + " Minor 7")}
				if (Identify_Interval(c, d) === "M3"){
					document.getElementById("root").innerHTML = a;
					document.getElementById("third").innerHTML = b;
					document.getElementById("fifth").innerHTML = c;
					document.getElementById("seventh").innerHTML = d;
					return (a + " Minor Major 7")}
				if (Identify_Interval(c, d) === "m2"){
					document.getElementById("root").innerHTML = d;
					document.getElementById("third").innerHTML = a;
					document.getElementById("fifth").innerHTML = b;
					document.getElementById("seventh").innerHTML = c;
					return (d + " Major 7th (First Inversion)")}
				if (Identify_Interval(c, d) === "M2"){
					document.getElementById("root").innerHTML = d;
					document.getElementById("third").innerHTML = a;
					document.getElementById("fifth").innerHTML = b;
					document.getElementById("seventh").innerHTML = c;
					return (d + " Half Diminished 7th (First Inversion)")}
			}
		}

	// (m3, m3 Chords)
		if (Identify_Interval(a, b) === "m3"){
			if (Identify_Interval(b, c) === "m3"){
				if (Identify_Interval(c, d) === "M2"){
					document.getElementById("root").innerHTML = d;
					document.getElementById("third").innerHTML = a;
					document.getElementById("fifth").innerHTML = b;
					document.getElementById("seventh").innerHTML = c;
					return (d + " Major Minor 7th (First Inversion)")}
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = a;
					document.getElementById("third").innerHTML = b;
					document.getElementById("fifth").innerHTML = c;
					document.getElementById("seventh").innerHTML = d;
					return (a + " Fully Diminished 7")}
				if (Identify_Interval(c, d) === "Augmented 2nd"){
					document.getElementById("root").innerHTML = d;
					document.getElementById("third").innerHTML = a;
					document.getElementById("fifth").innerHTML = b;
					document.getElementById("seventh").innerHTML = c;
					return (d + " Fully Diminished 7th (First Inversion)")}
				if (Identify_Interval(c, d) === "M3"){
					document.getElementById("root").innerHTML = a;
					document.getElementById("third").innerHTML = b;
					document.getElementById("fifth").innerHTML = c;
					document.getElementById("seventh").innerHTML = d;
					return (a + " Half Diminished 7th")}
			}
		}			

	// (m3, M2 Chords)
		if (Identify_Interval(a, b) === "m3"){
			if (Identify_Interval(b, c) === "M2"){
				if (Identify_Interval(c, d) === "M3"){
					document.getElementById("root").innerHTML = c;
					document.getElementById("third").innerHTML = d;
					document.getElementById("fifth").innerHTML = a;
					document.getElementById("seventh").innerHTML = b;
					return (c + " Major Minor 7th (Second Inversion)")}
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = c;
					document.getElementById("third").innerHTML = d;
					document.getElementById("fifth").innerHTML = a;
					document.getElementById("seventh").innerHTML = b;
					return (c + " Minor 7th (Second Inversion)")}
			}
		}

	// (The Sole Diminished Chord)
		if (Identify_Interval(a, b) === "m3"){
			if (Identify_Interval(b, c) === "Augmented 2nd"){
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = c;
					document.getElementById("third").innerHTML = d;
					document.getElementById("fifth").innerHTML = a;
					document.getElementById("seventh").innerHTML = b;
					return (c + " Fully Diminished 7th (Second Inversion)")}
			}
		}

	// (M2, m3 Chords)
		if (Identify_Interval(a, b) === "M2"){
			if (Identify_Interval(b, c) === "m3"){
				if (Identify_Interval(c, d) === "M3"){
					document.getElementById("root").innerHTML = b;
					document.getElementById("third").innerHTML = c;
					document.getElementById("fifth").innerHTML = d;
					document.getElementById("seventh").innerHTML = a;
					return (b + " Minor 7th (Third Inversion)")}												
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = b;
					document.getElementById("third").innerHTML = c;
					document.getElementById("fifth").innerHTML = d;
					document.getElementById("seventh").innerHTML = a;
					return (b + " Half Diminished 7th (Third Inversion)")}
			}
		}
																															
	// (M2 Chord)
		if (Identify_Interval(a, b) === "M2"){
			if (Identify_Interval(b, c) === "M3"){
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = b;
					document.getElementById("third").innerHTML = c;
					document.getElementById("fifth").innerHTML = d;
					document.getElementById("seventh").innerHTML = a;
					return (b + " Major Minor 7 (Third Inversion)")}
			}
		}

	// (m2 Chord)
		if (Identify_Interval(a, b) === "m2"){
			if (Identify_Interval(b, c) === "M3"){
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = b;
					document.getElementById("third").innerHTML = c;
					document.getElementById("fifth").innerHTML = d;
					document.getElementById("seventh").innerHTML = a;
					return (b + " Major 7th (Third Inversion)")}
			}
			if (Identify_Interval(b, c) === "m3"){
				if (Identify_Interval(c, d) === "M3"){
					document.getElementById("root").innerHTML = b;
					document.getElementById("third").innerHTML = c;
					document.getElementById("fifth").innerHTML = d;
					document.getElementById("seventh").innerHTML = a;
					return (b + " Minor Major 7th (Third Inversion)")}
			}
		}										
		if (Identify_Interval(a, b) === "Augmented 2nd"){
			if (Identify_Interval(b, c) === "m3"){
				if (Identify_Interval(c, d) === "m3"){
					document.getElementById("root").innerHTML = b;
					document.getElementById("third").innerHTML = c;
					document.getElementById("fifth").innerHTML = d;
					document.getElementById("seventh").innerHTML = a;
					return (b + " Fully Diminished 7th (Third Inversion)")}
			}
		}
	}

	const TheNotes = ["A","B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G"];
	const Sorted = [a];
	let AIndex = TheNotes.indexOf(a[0]);
	let BIndex = TheNotes.indexOf(b[0]);
	let CIndex = TheNotes.indexOf(c[0]);
	let DIndex = TheNotes.indexOf(d[0]);

	if (inputList.length >= 2) {
		BIndex = TheNotes.indexOf(b[0])
	}

	if (inputList.length >= 3) {
		CIndex = TheNotes.indexOf(c[0])
	}

	if (inputList.length === 2) {
		Sorted.push(b)
		a = Sorted[0]
		b = Sorted[1]
	}

	if (inputList.length === 3) { 
				
		if (BIndex < AIndex){
			BIndex += 9
		}
		if (CIndex < AIndex){
			CIndex += 9
		}
		if (BIndex < CIndex){
			Sorted.push(b)
			Sorted.push(c)
		}
			
		else {
			Sorted.push(c)
			Sorted.push(b)
		}
		a = Sorted[0]
		b = Sorted[1]
		c = Sorted[2]
	}
	if (inputList.length === 4) {
		
		if (BIndex < AIndex) {
			BIndex += 9
		}

		if (CIndex < AIndex) {
			CIndex += 9
		}

		if (DIndex < AIndex) {
			DIndex += 9
		}
		
		if (BIndex < CIndex && BIndex < DIndex) {
			Sorted.push(b)
			if (CIndex < DIndex) {
				Sorted.push(c)
				Sorted.push(d)
			}
			else {
				Sorted.push(d)
				Sorted.push(c)
			}
		}
		if (CIndex < BIndex && CIndex < DIndex) {
			Sorted.push(c)
			if (BIndex	< DIndex) {
				Sorted.push(b)
				Sorted.push(d)
			}
			else {
				Sorted.push(d)
				Sorted.push(b)
			}
		}
		if (BIndex > DIndex && CIndex > DIndex) {
			Sorted.push(d)
			if (BIndex < CIndex) {
				Sorted.push(b)
				Sorted.push(c)
			}
			else {
				Sorted.push(c)
				Sorted.push(b)	
			}
		}
		a = Sorted[0]
		b = Sorted[1]
		c = Sorted[2]
		d = Sorted[3]
	}

	function convertToName() {
		let intAns;
		if (Identify_Interval(a,b) === "m2"){
			intAns = "Minor 2nd";
			return intAns;
		}
		else if (Identify_Interval(a,b) === "M2"){
			intAns = "Major 2nd";
			return intAns;
		}
		
		else if (Identify_Interval(a, b) === "m3"){
			intAns = "Minor 3rd"
			return intAns;
		}
		else if (Identify_Interval(a, b) === "M3"){
			intAns = "Major 3rd"
			return intAns;
		}
		else if (Identify_Interval(a,b) === "P4"){
			intAns = "Perfect 4th";
			return intAns;
		}
		else if (Identify_Interval(a,b) === "P5"){
			intAns = "Perfect 5th";
			return intAns;
		}
		else if (Identify_Interval(a,b) === "m6"){
			intAns = "Minor 6th";
			return intAns;
		}
		else if (Identify_Interval(a,b) === "M6"){
			intAns = "Major 6th";
			return intAns;
		}
		else if (Identify_Interval(a,b) === "m7"){
			intAns = "Minor 7th";
			return intAns;
		}
		else if (Identify_Interval(a,b) === "M7"){
			intAns = "Major 7th";
			return intAns;
		}
		
		else {
			return Identify_Interval(a, b);
		};
	};

	function initializeChord(){
		document.getElementById("root").innerHTML = "";
		document.getElementById("RootText").innerHTML = "";
		document.getElementById("third").innerHTML = "";
		document.getElementById("fifth").innerHTML = "";
		document.getElementById("seventh").innerHTML = "";
		document.getElementById("ThirdText").innerHTML = "";
		document.getElementById("FifthText").innerHTML = "";
		document.getElementById("SeventhText").innerHTML = "";
	}

	function printAns()  {

		switch(inputList.length) {
			case 1:				
					initializeChord();	
					document.getElementById("answer").innerHTML = "Please enter more than one note!";			
			case 2:
				initializeChord();
				let intAns = convertToName();
		
				if (intAns === undefined) {
					initializeChord();
					document.getElementById("answer").innerHTML = "This chord doesn't spell a valid interval!";
				}
				else {
				document.getElementById("answer").innerHTML = intAns;
				};
				break;
			case 3:
				initializeChord();
				triadAns = Identify_Chord(a, b ,c);
				document.getElementById("RootText").innerHTML = "Root";
				document.getElementById("ThirdText").innerHTML = "Third";
				document.getElementById("FifthText").innerHTML = "Fifth";
				
				
				if (triadAns === undefined) {
					initializeChord();	
					document.getElementById("answer").innerHTML = "This chord doesn't spell a valid triad!";
				}
				else {
					document.getElementById("answer").innerHTML = triadAns;
				};

				break;
			case 4:
				initializeChord();
				sevAns = Identify_Chord_Seventh(a, b, c, d);
				document.getElementById("RootText").innerHTML = "Root";
				document.getElementById("ThirdText").innerHTML = "Third";
				document.getElementById("FifthText").innerHTML = "Fifth";
				document.getElementById("SeventhText").innerHTML = "Seventh";


				if (sevAns === undefined) {
					initializeChord();
					document.getElementById("answer").innerHTML = "This chord doesn't spell  a valid seventh chord!";
				}
				
				else {
					document.getElementById("answer").innerHTML = sevAns;
				};
				break;
			default:
				document.getElementById("answer").innerHTML = "Please try a different chord";
		}
	}
	if (printAns() === 0) {
		return "Please enter more than one note!";
	}
	else {
		printAns();
	}
}
