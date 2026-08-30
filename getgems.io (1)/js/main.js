(function () {
    'use strict';

    const LUCKY_BUYS = [
        {
            collection: 'Signet Rings',
            name: 'Signet Ring #5519',
            emoji: '💍',
            bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e, #e17055)',
            multiplier: '1.32X',
            marketPrice: 32,
            luckyPrice: 24.09
        },
        {
            collection: 'Telegram Usernames',
            name: '@dokkcer',
            emoji: '🔖',
            bg: 'linear-gradient(135deg, #74b9ff, #0984e3, #6c5ce7)',
            multiplier: '1.54X',
            marketPrice: 35.4,
            luckyPrice: 22.9
        },
        {
            collection: 'Major Achievements',
            name: 'Letter STAR #36',
            emoji: '⭐',
            bg: 'linear-gradient(135deg, #a29bfe, #6c5ce7, #fd79a8)',
            multiplier: '2.12X',
            marketPrice: 33,
            luckyPrice: 15.52
        },
        {
            collection: 'Swiss Watches',
            name: 'Swiss Watch #25422',
            emoji: '⌚',
            bg: 'linear-gradient(135deg, #dfe6e9, #b2bec3, #636e72)',
            multiplier: '1.32X',
            marketPrice: 88,
            luckyPrice: 66.26
        },
        {
            collection: 'Toy Bears',
            name: 'Toy Bear #31708',
            emoji: '🧸',
            bg: 'linear-gradient(135deg, #fab1a0, #e17055, #d63031)',
            multiplier: '2.83X',
            marketPrice: 35,
            luckyPrice: 12.35
        },
        {
            collection: "Khabib's Papakhas",
            name: "Khabib's Papakha #24577",
            emoji: '🥳',
            bg: 'linear-gradient(135deg, #81ecec, #00cec9, #0984e3)',
            multiplier: '2.57X',
            marketPrice: 119,
            luckyPrice: 46.2
        },
        {
            collection: "Khabib's Papakhas",
            name: "Khabib's Papakha #10644",
            emoji: '🎩',
            bg: 'linear-gradient(135deg, #55efc4, #00b894, #00cec9)',
            multiplier: '1.77X',
            marketPrice: 23.8,
            luckyPrice: 13.44
        },
        {
            collection: 'UFC Strikes',
            name: 'UFC Strike #4842',
            emoji: '👊',
            bg: 'linear-gradient(135deg, #ff7675, #d63031, #e17055)',
            multiplier: '1.77X',
            marketPrice: 40,
            luckyPrice: 22.58
        },
        {
            collection: 'Snoop Cigars',
            name: 'Snoop Cigar #32564',
            emoji: '🚬',
            bg: 'linear-gradient(135deg, #b2bec3, #636e72, #2d3436)',
            multiplier: '1.37X',
            marketPrice: 18,
            luckyPrice: 13.12
        },
        {
            collection: 'UFC Strikes',
            name: 'UFC Strike #44389',
            emoji: '🥊',
            bg: 'linear-gradient(135deg, #fd79a8, #e84393, #d63031)',
            multiplier: '1.84X',
            marketPrice: 40,
            luckyPrice: 21.64
        },
        {
            collection: 'UFC Strikes',
            name: 'UFC Strike #26212',
            emoji: '💥',
            bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e, #e17055)',
            multiplier: '3.69X',
            marketPrice: 18,
            luckyPrice: 4.87
        },
        {
            collection: 'Swiss Watches',
            name: 'Swiss Watch #17438',
            emoji: '⏱️',
            bg: 'linear-gradient(135deg, #74b9ff, #0984e3, #2d3436)',
            multiplier: '15.51X',
            marketPrice: 89,
            luckyPrice: 5.73
        }
    ];

    const COLLECTIONS_1D = [
        {
            rank: 1,
            name: 'Telegram Usernames',
            emoji: '🔖',
            cover: 'linear-gradient(135deg, #74b9ff, #0984e3)',
            items: '2.4M',
            owners: '412K',
            floor: 1.25,
            vol: 184500,
            change: 12.4
        },
        {
            rank: 2,
            name: 'Telegram Gift Cards',
            emoji: '🎁',
            cover: 'linear-gradient(135deg, #fd79a8, #e84393)',
            items: '890K',
            owners: '256K',
            floor: 0.48,
            vol: 142300,
            change: 8.7
        },
        {
            rank: 3,
            name: 'Anonymous Numbers',
            emoji: '📱',
            cover: 'linear-gradient(135deg, #636e72, #2d3436)',
            items: '1.1M',
            owners: '189K',
            floor: 2.5,
            vol: 98200,
            change: -2.1
        },
        {
            rank: 4,
            name: 'Swiss Watches',
            emoji: '⌚',
            cover: 'linear-gradient(135deg, #dfe6e9, #b2bec3)',
            items: '45.2K',
            owners: '18.4K',
            floor: 78,
            vol: 87600,
            change: 24.8
        },
        {
            rank: 5,
            name: 'Signet Rings',
            emoji: '💍',
            cover: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)',
            items: '42.8K',
            owners: '15.2K',
            floor: 22,
            vol: 64500,
            change: 16.3
        },
        {
            rank: 6,
            name: "Khabib's Papakhas",
            emoji: '🥳',
            cover: 'linear-gradient(135deg, #81ecec, #00cec9)',
            items: '38.4K',
            owners: '12.9K',
            floor: 18,
            vol: 52100,
            change: -4.6
        },
        {
            rank: 7,
            name: 'Scared Cats',
            emoji: '🐱',
            cover: 'linear-gradient(135deg, #fab1a0, #e17055)',
            items: '28.9K',
            owners: '9.8K',
            floor: 180,
            vol: 45800,
            change: 31.2
        },
        {
            rank: 8,
            name: 'UFC Strikes',
            emoji: '🥊',
            cover: 'linear-gradient(135deg, #ff7675, #d63031)',
            items: '68.1K',
            owners: '22.4K',
            floor: 15,
            vol: 41200,
            change: 18.9
        }
    ];

    const COLLECTIONS_7D = [
        { ...COLLECTIONS_1D[0], vol: 985000, change: 4.2 },
        { ...COLLECTIONS_1D[1], vol: 742800, change: 11.1 },
        { rank: 3, name: 'Major Achievements', emoji: '🏆', cover: 'linear-gradient(135deg, #a29bfe, #6c5ce7)', items: '125K', owners: '48.2K', floor: 12, vol: 521400, change: 22.5 },
        { rank: 4, name: 'Telegram Numbers', emoji: '🔢', cover: 'linear-gradient(135deg, #55efc4, #00b894)', items: '680K', owners: '142K', floor: 3.2, vol: 485600, change: 7.8 },
        { ...COLLECTIONS_1D[2], vol: 412300, change: 1.4 },
        { ...COLLECTIONS_1D[3], vol: 398200, change: 38.4 },
        { rank: 7, name: 'Toy Bears', emoji: '🧸', cover: 'linear-gradient(135deg, #fab1a0, #e17055)', items: '52.8K', owners: '18.1K', floor: 88, vol: 298700, change: 45.2 },
        { rank: 8, name: 'Vice Creams', emoji: '🍦', cover: 'linear-gradient(135deg, #fd79a8, #fdcb6e)', items: '425K', owners: '86.4K', floor: 15, vol: 256800, change: 52.7 }
    ];

    const COLLECTIONS_30D = [
        { ...COLLECTIONS_1D[0], vol: 3850000, change: -2.8 },
        { ...COLLECTIONS_1D[1], vol: 2742800, change: 18.6 },
        { ...COLLECTIONS_7D[3], vol: 1851400, change: 12.3 },
        { ...COLLECTIONS_1D[2], vol: 1612300, change: 5.4 },
        { ...COLLECTIONS_7D[2], vol: 1421400, change: 88.9 },
        { rank: 6, name: 'Diamonds', emoji: '💎', cover: 'linear-gradient(135deg, #81ecec, #74b9ff)', items: '89.2K', owners: '32.1K', floor: 45, vol: 1198200, change: 156.2 },
        { ...COLLECTIONS_1D[3], vol: 1098200, change: 124.7 },
        { rank: 8, name: 'Money Pots', emoji: '🪙', cover: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', items: '28.4K', owners: '9.2K', floor: 28, vol: 898200, change: 67.3 }
    ];

    const COLLECTIONS_ALL = [
        { ...COLLECTIONS_1D[0], vol: 28500000, change: 148.2 },
        { rank: 2, name: 'Diamonds', emoji: '💎', cover: 'linear-gradient(135deg, #81ecec, #74b9ff)', items: '89.2K', owners: '32.1K', floor: 45, vol: 18982000, change: 892.4 },
        { ...COLLECTIONS_1D[1], vol: 15742800, change: 218.6 },
        { ...COLLECTIONS_7D[3], vol: 12651400, change: 76.3 },
        { rank: 5, name: 'Horses', emoji: '🐎', cover: 'linear-gradient(135deg, #b2bec3, #636e72)', items: '12.8K', owners: '4.8K', floor: 1250, vol: 11421400, change: 312.8 },
        { rank: 6, name: 'Moon Shards', emoji: '🌙', cover: 'linear-gradient(135deg, #a29bfe, #6c5ce7)', items: '186K', owners: '62.4K', floor: 28, vol: 9698200, change: 244.1 },
        { ...COLLECTIONS_1D[2], vol: 7612300, change: 38.9 },
        { rank: 8, name: 'Major Achievements', emoji: '🏆', cover: 'linear-gradient(135deg, #a29bfe, #6c5ce7)', items: '125K', owners: '48.2K', floor: 12, vol: 6821400, change: 165.7 }
    ];

    const EXPLORE_COLLECTIONS = [
        {
            name: 'Telegram Usernames',
            emoji: '🔖',
            coverBg: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #6c5ce7 100%)',
            coverEmoji: '📛',
            floor: 1.25,
            vol: 184.5,
            items: '2.4M'
        },
        {
            name: 'Major Achievements',
            emoji: '🏆',
            coverBg: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 50%, #fd79a8 100%)',
            coverEmoji: '🎖️',
            floor: 12,
            vol: 521.4,
            items: '125K'
        },
        {
            name: 'Diamonds',
            emoji: '💎',
            coverBg: 'linear-gradient(135deg, #81ecec 0%, #74b9ff 50%, #a29bfe 100%)',
            coverEmoji: '💠',
            floor: 45,
            vol: 1198.2,
            items: '89.2K'
        },
        {
            name: 'Telegram Gift Cards',
            emoji: '🎁',
            coverBg: 'linear-gradient(135deg, #fd79a8 0%, #e84393 50%, #ff7675 100%)',
            coverEmoji: '🎀',
            floor: 0.48,
            vol: 142.3,
            items: '890K'
        },
        {
            name: 'Swiss Watches',
            emoji: '⌚',
            coverBg: 'linear-gradient(135deg, #dfe6e9 0%, #b2bec3 50%, #636e72 100%)',
            coverEmoji: '⏰',
            floor: 78,
            vol: 87.6,
            items: '45.2K'
        },
        {
            name: 'Horses',
            emoji: '🐎',
            coverBg: 'linear-gradient(135deg, #fab1a0 0%, #e17055 50%, #b2bec3 100%)',
            coverEmoji: '🐴',
            floor: 1250,
            vol: 1142.1,
            items: '12.8K'
        },
        {
            name: 'Anonymous Numbers',
            emoji: '📱',
            coverBg: 'linear-gradient(135deg, #636e72 0%, #2d3436 50%, #00b894 100%)',
            coverEmoji: '📞',
            floor: 2.5,
            vol: 98.2,
            items: '1.1M'
        },
        {
            name: 'Vice Creams',
            emoji: '🍦',
            coverBg: 'linear-gradient(135deg, #fd79a8 0%, #e84393 30%, #fdcb6e 70%, #ffeaa7 100%)',
            coverEmoji: '🍨',
            floor: 15,
            vol: 256.8,
            items: '425K'
        }
    ];

    function formatVol(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toFixed(0);
    }

    function renderLuckyBuys() {
        const container = document.getElementById('luckyBuysGrid');
        if (!container) return;

        const html = LUCKY_BUYS.map(function (item) {
            return '<a href="#" class="nft-card">' +
                '<div class="nft-card-img-wrapper">' +
                    '<div class="nft-card-img" style="background:' + item.bg + ';">' + item.emoji + '</div>' +
                    '<span class="nft-multiplier">' + item.multiplier + '</span>' +
                '</div>' +
                '<div class="nft-card-body">' +
                    '<div class="nft-collection">' + item.collection + '</div>' +
                    '<div class="nft-name">' + item.name + '</div>' +
                    '<div class="nft-price-row">' +
                        '<div>' +
                            '<div class="nft-price-label">Market</div>' +
                            '<div class="nft-price nft-price-old">' + item.marketPrice.toFixed(2) + ' TON</div>' +
                        '</div>' +
                        '<div style="text-align:right;">' +
                            '<div class="nft-price-label">Lucky Buy</div>' +
                            '<div class="nft-price nft-price-current">' + item.luckyPrice.toFixed(2) + ' TON</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</a>';
        }).join('');

        container.innerHTML = html;
    }

    function renderCollections(data) {
        const tbody = document.getElementById('collectionsTableBody');
        if (!tbody) return;

        const tonIcon = '<svg class="ton-icon" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.174 5.929l-7.607 13.688-3.58-5.261c-.173-.254-.576-.254-.75 0l-3.28 5.068a.463.463 0 00.39.69h3.349a.5.5 0 01.448.276l1.376 2.616c.172.327.645.327.817 0l6.062-11.434a.46.46 0 01.623-.17c.286.16.386.522.224.806l-4.188 7.32h2.523c.442 0 .709.473.47.859l-5.95 9.605a.928.928 0 01-1.56 0l-5.569-9.606a.929.929 0 01-.05-.942l3.904-7.477c.172-.33.027-.732-.324-.903a.787.787 0 00-.936.19l-7.16 7.956A2.24 2.24 0 004 21.184V24a8 8 0 008 8h12a8 8 0 008-8V13a8 8 0 00-8-8h-.238c.276.562.411 1.17.411 1.789 0 .528-.107 1.048-.308 1.529-.085.2-.05.435.088.603l3.004 3.642c.282.342.238.84-.098 1.124-.34.285-.843.244-1.125-.096l-2.63-3.189c-.222-.269-.532-.396-.843-.36-.544.063-.883.587-.82 1.13.058.497.36.943.779 1.21l5.31 3.397c.387.247.508.757.265 1.146a.856.856 0 01-1.142.266l-4.908-3.14c-.435-.278-.865-.504-1.35-.632-.483-.127-.987-.15-1.473-.07-.576.095-1.118.364-1.54.77l-.944.907-.472-.735c-1.02-1.586-2.92-2.018-4.44-.97-.61.422-.788 1.26-.4 1.868l1.654 2.563H8.118c-.275 0-.495.236-.458.51.028.22.177.41.383.48l2.45.84c.318.11.487.45.38.767l-.505 1.516a.456.456 0 00.606.55l2.076-.735a.547.547 0 01.675.284l.808 2.002c.086.213.344.308.554.213l.884-.4a.547.547 0 01.665.646l-.407 1.351a1.024 1.024 0 00.31 1.125c.333.254.805.175 1.057-.16l.346-.464z" fill="currentColor"/></svg>';

        const html = data.map(function (col) {
            const changeClass = col.change >= 0 ? 'price-up' : 'price-down';
            const changeSign = col.change >= 0 ? '+' : '';
            return '<tr>' +
                '<td class="col-rank">' + col.rank + '</td>' +
                '<td><div class="collection-cell">' +
                    '<div class="collection-avatar" style="background:' + col.cover + ';">' + col.emoji + '</div>' +
                    '<div class="collection-info">' +
                        '<span class="collection-name">' + col.name + '</span>' +
                    '</div>' +
                '</div></td>' +
                '<td class="col-num"><span class="price-ton">' + tonIcon + ' ' + col.floor.toFixed(2) + '</span></td>' +
                '<td class="col-num"><span class="price-ton">' + tonIcon + ' ' + formatVol(col.vol) + '</span></td>' +
                '<td class="col-num d-none d-md-table-cell">' + col.items + '</td>' +
                '<td class="col-num d-none d-lg-table-cell">' + col.owners + '</td>' +
                '<td class="col-num ' + changeClass + '">' + changeSign + col.change.toFixed(1) + '%</td>' +
            '</tr>';
        }).join('');

        tbody.innerHTML = html;
    }

    function renderExplore() {
        const container = document.getElementById('exploreGrid');
        if (!container) return;

        const html = EXPLORE_COLLECTIONS.map(function (col) {
            return '<a href="#" class="collection-card">' +
                '<div class="collection-card-cover">' +
                    '<div class="collection-cover-bg" style="background:' + col.coverBg + ';">' + col.coverEmoji + '</div>' +
                    '<div class="collection-card-avatar" style="background:' + col.coverBg + ';">' + col.emoji + '</div>' +
                '</div>' +
                '<div class="collection-card-body">' +
                    '<div class="collection-card-title">' + col.name + '</div>' +
                    '<div class="collection-card-stats">' +
                        '<div class="collection-stat">' +
                            '<span class="collection-stat-label">Floor</span>' +
                            '<span class="collection-stat-value">' + col.floor.toFixed(2) + ' TON</span>' +
                        '</div>' +
                        '<div class="collection-stat">' +
                            '<span class="collection-stat-label">30d Vol</span>' +
                            '<span class="collection-stat-value">' + col.vol.toFixed(1) + 'K</span>' +
                        '</div>' +
                        '<div class="collection-stat">' +
                            '<span class="collection-stat-label">Items</span>' +
                            '<span class="collection-stat-value">' + col.items + '</span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</a>';
        }).join('');

        container.innerHTML = html;
    }

    function setupSegmentedControls() {
        const buttons = document.querySelectorAll('.segment-btn');
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                buttons.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                const period = btn.getAttribute('data-period');
                let data;
                switch (period) {
                    case '1d': data = COLLECTIONS_1D; break;
                    case '7d': data = COLLECTIONS_7D; break;
                    case '30d': data = COLLECTIONS_30D; break;
                    case 'all': data = COLLECTIONS_ALL; break;
                    default: data = COLLECTIONS_1D;
                }
                renderCollections(data);
            });
        });
    }

    function setupThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        const savedTheme = localStorage.getItem('gg-theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-color-scheme', 'dark');
        }

        toggle.addEventListener('click', function () {
            const current = document.documentElement.getAttribute('data-color-scheme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-color-scheme', next);
            try { localStorage.setItem('gg-theme', next); } catch (e) {}
        });
    }

    function setupSearch() {
        const input = document.querySelector('.nav-search-input');
        if (!input) return;
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                const q = input.value.trim();
                if (q) {
                    alert('Searching for: ' + q + '\n\n(This is a demo clone)');
                }
            }
        });
    }

    function setupWallet() {
        const btn = document.querySelector('.btn-wallet');
        if (!btn) return;
        btn.addEventListener('click', function () {
            alert('Connect Wallet\n\n(This is a demo clone. Connecting to TON wallet requires Tonkeeper/TonHub integration.)');
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderLuckyBuys();
        renderCollections(COLLECTIONS_1D);
        renderExplore();
        setupSegmentedControls();
        setupThemeToggle();
        setupSearch();
        setupWallet();
    });
})();
