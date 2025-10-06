{
    'name': 'Theme Prime Image',
    'version': '17.0.1.0.0',
    'summary': 'Extensión visual para theme prime',
    'category': 'Theme/eCommerce',
    'depends': ['theme_prime'],
    'data': [
        'views/theme_shop_layout_views.xml',
        'views/snippet/snippet_banner.xml'
    ],
    'assets': {
        'web.assets_frontend': [
            'theme_prime_image/static/src/js/s_banner.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False
}
