type MenuItem = {
    title: string,
    items?: Array<MenuItem>
};

const menuList: MenuItem[] = [
    {
        title: 'Животные', items: [
            {
                title: 'Млекопитающие', items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие', items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
                ],
            },
        ]
    },
    {
        title: 'Рыбы', items: [
            {
                title: 'Аквариумные', items: [
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель', items: [
                    {title: 'Морская форель'}
                ]
            },
        ]
    }
];

function generateMenu(list: MenuItem[]): string {
    let content = `<ul>`;

    for (const item of list) {
        content += `<li><a class='title'>${item.title}</a></li>`;

        if (item.items) {
            content += `<ul>${generateMenu(item.items)}</ul>`;
        }
    }

    content += `</ul>`;
    return content;
}

let navMenuList: HTMLDivElement | null = document.querySelector('.menu');

if (navMenuList) {
    navMenuList.innerHTML = generateMenu(menuList);
    navMenuList.onclick = (ev: MouseEvent) => {
        const el: HTMLAnchorElement = <HTMLAnchorElement>ev.target;
        const classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        const parentLi = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    };
}
