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
        const status:number = data.status;
        if (status == 200) {
            alert("URL이 성공적으로 단축되었습니다.");
            location.reload();
        } else if (status == 403) {
            alert("키가 이미 존재합니다.\n다른 키를 입력해주세요.")
        }
    })
})