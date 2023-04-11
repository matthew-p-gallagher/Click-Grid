from pydub import AudioSegment

# Load the audio file
audio = AudioSegment.from_file("rr8.mp3", format="mp3")

# Get the duration of the audio in milliseconds
duration = len(audio)

# Split the audio in half
halfway_point = duration // 2
first_half = audio[:halfway_point]
second_half = audio[halfway_point:]

# Export the two halves as separate audio files
first_half.export("first_half.mp3", format="mp3")
second_half.export("second_half.mp3", format="mp3")
