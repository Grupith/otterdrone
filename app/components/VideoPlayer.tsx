const VideoPlayer = () => {
  return (
    <div className="aspect-video sm:w-2/3">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/tIiZBrDTrKQ"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer
