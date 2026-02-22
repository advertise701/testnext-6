export default async function EpisodeVideos({ params }) {
  let { vidEpisode } = await params;

  return (
    <div>
      <h1>{vidEpisode} Videos</h1>
      <p>This is the {vidEpisode} Videos page.</p>
    </div>
  );
}
