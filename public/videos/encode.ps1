# Ensure FFmpeg is installed and available in your PATH. 
# This script assumes the input video file is in the same folder as this script.
# Adjust the file names as needed.

# Input and output file paths
$inputVideo = ".\master.mp4"  # Path to your original video
$outputVideo = ".\output.mp4"  # Output file for the optimized video
$outputVideo960 = ".\output_960.mp4"  # Output file for the 960-width scaled video

# FFmpeg command to create an optimized video for scrubbing
$ffmpegCommand = "ffmpeg -i $inputVideo -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p $outputVideo"

# FFmpeg command to create a smaller 960px width video
$ffmpegCommand960 = "ffmpeg -i $inputVideo -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p $outputVideo960"

# Run FFmpeg commands
Write-Host "Processing video for scrubbing optimization..."
Invoke-Expression $ffmpegCommand

Write-Host "Processing scaled 960px width video..."
Invoke-Expression $ffmpegCommand960

Write-Host "Video processing complete!"
