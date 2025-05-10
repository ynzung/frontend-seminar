async function fetchSingerList(keyword) {
  try {
    const response = await fetch(
      `https://api.manana.kr/karaoke/singer/${keyword}.json`
    );
    const songs = await response.json();
    renderSongList(songs);
  } catch (error) {
    console.log("에러 발생", error);
  }
}

function renderSongList(songs) {
  const listEl = document.getElementById("songList");
  listEl.innerHTML = "";

  if (!Array.isArray(songs)) {
    listEl.innerHTML = "<li class='no-result'>결과가 없습니다.</li>";
    return;
  }

  songs.forEach((song) => {
    const li = document.createElement("li");
    li.classList.add("song-card");

    li.innerHTML = `
        <div class="song-title">${song.title}</div>
        <div class="song-singer">${song.singer}</div>
        <div class="song-meta">
          <div><span class="label">번호</span>${song.no}</div>
          <div><span class="label">작곡</span>${song.composer}</div>
          <div><span class="label">작사</span>${song.lyricist}</div>
          <div><span class="label">발매일</span>${song.release}</div>
        </div>
      `;
    listEl.appendChild(li);
  });
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const keyword = document.getElementById("singerInput").value.trim();
  if (keyword) {
    fetchSingerList(keyword);
  }
});
