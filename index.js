

$(() => {
    const PARENT = $("article");

    for (let index = 0; index < 401; index++) {
        let code = `<div><img src="avatars/${index}.svg" /></div>`
        PARENT.append(code);
    }
}) 