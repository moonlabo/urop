document.getElementById("submit")?.addEventListener("click", () => {
    const url:string = "http://" + (<HTMLInputElement>document.getElementById("url"))?.value;
    const key:string = (<HTMLInputElement>document.getElementById("key"))?.value;

    fetch("/api/short", {
        method: "POST",
        body: JSON.stringify({
            url: url,
            key: key
        }),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.status == 200) {
            alert("URL이 성공적으로 단축되었습니다.");
            location.reload();
        }
    })
})