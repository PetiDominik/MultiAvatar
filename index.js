

$(() => {
    const PARENT = $("article");

    for (let index = 0; index <= 1000; index++) {
        let code = `<div><img src="avatars_bg/${index}.svg" /></div>`
        PARENT.append(code);
    }
}) 