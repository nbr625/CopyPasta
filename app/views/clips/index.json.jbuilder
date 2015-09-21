json.array!(@clips) do |clip|
  json.extract! clip, :id, :content
  json.url clip_url(clip, format: :json)
end
