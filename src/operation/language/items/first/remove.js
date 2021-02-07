module.exports = () => new Promise( resolve => resolve( browser.execute( () => {

    const item = document.querySelector( '.script-filter-menu .mat-menu-item' );
    if ( ! item ) {

        return false;

    }

    item.parentElement.removeChild( item );
    return true;

} ) ) );
