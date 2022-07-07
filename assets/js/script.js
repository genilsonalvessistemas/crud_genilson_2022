$(document).ready(function () {

    let user_userid;
    let option_type;

    // SHOW TABLE
    // var tableusers = $('#tableusers').DataTable({
    //     processing: true,
    //     serverSide: false,
    //     'ajax': {
    //         'dataSrc': '',
    //         'url': 'process/process_data.php',
    //         'method': 'POST',
    //         'data': { option_type: 4 }
    //     },
    //     'columns': [
    //         { 'data': 'user_userid' },
    //         { 'data': 'user_name' },
    //         { 'data': 'user_firstname' },
    //         { 'data': 'user_lastname' },
    //         { 'data': 'user_genre' },
    //         { 'data': 'user_password' },
    //         { 'data': 'user_status' },
    //         { 'defaultContent': "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm'><span class='material-icons-outlined'>edit_note</span>Editar</button><button class='btn btn-danger btn-sm'><span class='material-icons-outlined'>delete</span>Deletar</button></div></div>" }
    //     ]
    // });

    // New
    $('#btnNew').click(function () {
        var option_type = 1;
        var user_userid = null;
        $('#form_user').trigger('reset');
        $('.modal-header').css('background-color', '#17a2b8');
        $('.modal-header').css('color', 'white');
        $('.modal-title').text('Add user');
        $('#modalCRUD').modal('show');
        $('#form_user').submit(function (e) {
            e.preventDefault();
            // var data = $('#form_user').serialize();
            user_name = $.trim($('#user_name').val());
            user_firstname = $.trim($('#user_firstname').val());
            user_lastname = $.trim($('#user_lastname').val());
            user_genre = $.trim($('#user_genre').val());
            user_password = $.trim($('#user_password').val());
            user_status = $.trim($('form-select option:selected').val());
            // alert(user_status);
            $.ajax({
                url: 'process/process_data.php',
                type: 'POST',
                datatype: 'JSON',
                data: {
                    user_userid: user_userid,
                    user_name: user_name,
                    user_firstname: user_firstname,
                    user_lastname: user_lastname,
                    user_genre: user_genre,
                    user_password: user_password,
                    user_status: user_status,
                    option_type: option_type
                },
                success: function (data) {
                    tableusers.ajax.reload(null, false);
                }
            });
            $('#modalCRUD').modal('hide');
        });
    });




    //Edit        
    $(document).on('click', '.btnEditar', function () {
        option_type = 2;
        fila = $(this).closest('tr');
        user_userid = parseInt(fila.find('td:eq(0)').text());
        user_name = fila.find('td:eq(1)').text();
        user_firstname = fila.find('td:eq(2)').text();
        user_lastname = fila.find('td:eq(3)').text();
        user_genre = fila.find('td:eq(4)').text();
        user_password = fila.find('td:eq(5)').text();
        user_status = fila.find('td:eq(6)').text();
        $('#user_name').val(user_name);
        $('#user_firstname').val(user_firstname);
        $('#user_lastname').val(user_lastname);
        $('#user_genre').val(user_genre);
        $('#user_password').val(user_password);
        $('#user_status').val(user_status);
        $('.modal-header').css('background-color', '#007bff');
        $('.modal-header').css('color', 'white');
        $('.modal-title').text('Editar Usuario');
        $('#modalCRUD').modal('show');
    });

    //Delete
    $(document).on('click', '.btnBorrar', function () {
        fila = $(this);
        user_userid = parseInt($(this).closest('tr').find('td:eq(0)').text());
        option_type = 3;
        var respuesta = confirm('¿Está seguro de borrar el registro ' + user_userid + '?');
        if (respuesta) {
            $.ajax({
                url: 'process/process_data.php',
                type: 'POST',
                datatype: 'json',
                data: { option_type: option_type, user_userid: user_userid },
                success: function () {
                    tableusers.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });

});    