

/**
* @author Felipe Tun <felipe.tun.cauich@gmail.com>
* Funcion para obtener la fecha actual o convertir una fecha a formato ISO
* @param string
* @param bool
* @return String.
*/
export const getCurrentDate = (current, useTime = false) => {
    var hoy = current !== undefined ? new Date(current) : new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1; //hoy es 0!
    var yyyy = hoy.getFullYear();

    dd = (dd < 10 ? ('0' + dd) : dd);
    mm = (mm < 10 ? ('0' + mm) : mm);

    let date = yyyy + '-' + mm + '-' + dd;

    if (useTime) {
        let hour = hoy.getHours();
        let minute = hoy.getMinutes();
        let second = hoy.getSeconds();
        hour = (hour.length == 1 ? ('0' + hour) : hour);
        minute = (minute.length == 1 ? ('0' + minute) : minute);
        second = (second.length == 1 ? ('0' + second) : second);
        date += ' ' + hour + ':' + minute + ':' + second;
    }

    return date;
}