$(document).ready(function () {

    let user_userid;
    let option_type;

    // SHOW TABLE
    var tableusers = $('#tableusers').DataTable({
        processing: true,
        serverSide: true,
        'language': {
            'url': 'assets/datatables/tradutor-datatables-ptBR.json'
        },
        'ajax': {
            'dataSrc': '',
            'url': 'process/process_data.php',
            'method': 'POST',
            'data': { option_type: 4 }
        },
        'columns': [
            { 'data': 'user_userid' },
            { 'data': 'user_name' },
            { 'data': 'user_firstname' },
            { 'data': 'user_lastname' },
            { 'data': 'user_genre' },
            { 'data': 'user_password' },
            { 'data': 'user_status' },
            { 'defaultContent': "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar btn-sm'><span class='material-icons-outlined'>edit_note</span>Editar</button><button class='btn btn-danger  btnDeletar btn-sm'><span class='material-icons-outlined'>delete</span>Deletar</button></div></div>" }
        ]
    });

    var linha = 0;
    $('#form_user').submit(function (e) {
        e.preventDefault();
        // var data = $('#form_user').serialize();
        var user_name = $.trim($('#user_name').val());
        var user_firstname = $.trim($('#user_firstname').val());
        var user_lastname = $.trim($('#user_lastname').val());
        var user_genre = $.trim($('#genre_selected').val());
        var user_password = $.trim($('#user_password').val());
        var user_status = $.trim($('#status_selected').val());
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

    // New
    $('#btnNew').click(function () {
        var option_type = 1;
        var user_userid = null;
        $('#form_user').trigger('reset');
        $('.modal-header').css('background-color', '#17a2b8');
        $('.modal-header').css('color', 'white');
        $('.modal-title').text('Add user');
        $('#modalCRUD').modal('show');
    });


    //Edit 
    $(document).on('click', '.btnEditar', function () {
        option_type = 2;
        linha = $(this).closest('tr');
        user_userid = parseInt(linha.find('td:eq(0)').text());
        user_name = linha.find('td:eq(1)').text();
        user_firstname = linha.find('td:eq(2)').text();
        user_lastname = linha.find('td:eq(3)').text();
        genre_selected = linha.find('td:eq(4)').text();
        user_password = linha.find('td:eq(5)').text();
        status_selected = linha.find('td:eq(6)').text();
        $('#user_name').val(user_name);
        $('#user_firstname').val(user_firstname);
        $('#user_lastname').val(user_lastname);
        $('#genre_selected').val(genre_selected);
        $('#user_password').val(user_password);
        $('#status_selected').val(status_selected);
        $('.modal-header').css('background-color', '#007bff');
        $('.modal-header').css('color', 'white');
        $('.modal-title').text('Editar Usuario');
        $('#modalCRUD').modal('show');

    });

    //Delete
    $(document).on('click', '.btnDeletar', function () {
        linha = $(this);
        user_userid = parseInt($(this).closest('tr').find('td:eq(0)').text());
        var resposta_user = user_userid;
        option_type = 3;
        $('.modal-header').css('background-color', '#cc0000');
        $('.modal-header').css('color', 'white');
        $('.modal-body').remove();
        $('#modalCRUD #btnSave').addClass('btn-danger');
        $('#modalCRUD #btnSave').text('Deletar registro')
        $('.modal-title').text('Realmente deseja deletar o usuario: ' + resposta_user + ' ?');
        $('#modalCRUD').modal('show');
        // var resposta_user = confirm('Realmente deseja deletar este registro? ' + user_userid + '?');
        $('#btnSave').on('click', function () {
            $.ajax({
                url: 'process/process_data.php',
                type: 'POST',
                datatype: 'json',
                data: { option_type: option_type, resposta_user: resposta_user },
                success: function () {
                    tableusers.row(linha.parents('tr')).remove().draw();
                    $("#form_user").append("<div class='modal-body'><div class='row'><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Nome de Usuário:</label><input type='text' class='form-control' id='user_name'></div></div><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Nome</label><input type='text' class='form-control' id='user_firstname'></div></div></div><div class='row'><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Sobrenome</label><input type='text' class='form-control' id='user_lastname'></div></div><div class='col-lg-6'><label class='col-form-label'>Genero</label><select id='genre_selected' class='form-select'><option>Selecione</option><option value='Masculino'>Masculino</option><option value='Feminino'>Feminino</option><option value='Outros'>Outros</option><option value='NaoInformado'>Prefiro não informar</option></select></div></div><div class='row'><div class='col-lg-8'><div class='form-group'><label class='col-form-label'>Senha</label><input type='text' class='form-control' id='user_password'></div></div><div class='col-lg-4'><label class='col-form-label'>Status</label><select id='status_selected' class='form-select'><option>Selecione</option><option value='Ativo'>Ativo</option><option value='Inativo'>Inativo</option></select></div></div></div>");
                    $('#modalCRUD #btnSave').removeClass('btn-danger');
                    $('#modalCRUD #btnSave').text('')
                }
            });
        });
        //$("#form_user").append("<div class='modal-body'><div class='row'><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Nome de Usuário:</label><input type='text' class='form-control' id='user_name'></div></div><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Nome</label><input type='text' class='form-control' id='user_firstname'></div></div></div><div class='row'><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Sobrenome</label><input type='text' class='form-control' id='user_lastname'></div></div><div class='col-lg-6'><label class='col-form-label'>Genero</label><select id='genre_selected' class='form-select'><option>Selecione</option><option value='Masculino'>Masculino</option><option value='Feminino'>Feminino</option><option value='Outros'>Outros</option><option value='NaoInformado'>Prefiro não informar</option></select></div></div><div class='row'><div class='col-lg-8'><div class='form-group'><label class='col-form-label'>Senha</label><input type='text' class='form-control' id='user_password'></div></div><div class='col-lg-4'><label class='col-form-label'>Status</label><select id='status_selected' class='form-select'><option>Selecione</option><option value='Ativo'>Ativo</option><option value='Inativo'>Inativo</option></select></div></div></div>");
        $('#modalCRUD').on('hide.bs.modal', '#modalCRUD', function (e) {
            $('#modalCRUD form')[0].reset();
            // $("#form_user").append("<div class='modal-body'><div class='row'><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Nome de Usuário:</label><input type='text' class='form-control' id='user_name'></div></div><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Nome</label><input type='text' class='form-control' id='user_firstname'></div></div></div><div class='row'><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Sobrenome</label><input type='text' class='form-control' id='user_lastname'></div></div><div class='col-lg-6'><label class='col-form-label'>Genero</label><select id='genre_selected' class='form-select'><option>Selecione</option><option value='Masculino'>Masculino</option><option value='Feminino'>Feminino</option><option value='Outros'>Outros</option><option value='NaoInformado'>Prefiro não informar</option></select></div></div><div class='row'><div class='col-lg-8'><div class='form-group'><label class='col-form-label'>Senha</label><input type='text' class='form-control' id='user_password'></div></div><div class='col-lg-4'><label class='col-form-label'>Status</label><select id='status_selected' class='form-select'><option>Selecione</option><option value='Ativo'>Ativo</option><option value='Inativo'>Inativo</option></select></div></div></div>");
        });
        $("#form_user").append("<div class='modal-body'><div class='row'><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Nome de Usuário:</label><input type='text' class='form-control' id='user_name'></div></div><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Nome</label><input type='text' class='form-control' id='user_firstname'></div></div></div><div class='row'><div class='col-lg-6'><div class='form-group'><label class='col-form-label'>Sobrenome</label><input type='text' class='form-control' id='user_lastname'></div></div><div class='col-lg-6'><label class='col-form-label'>Genero</label><select id='genre_selected' class='form-select'><option>Selecione</option><option value='Masculino'>Masculino</option><option value='Feminino'>Feminino</option><option value='Outros'>Outros</option><option value='NaoInformado'>Prefiro não informar</option></select></div></div><div class='row'><div class='col-lg-8'><div class='form-group'><label class='col-form-label'>Senha</label><input type='text' class='form-control' id='user_password'></div></div><div class='col-lg-4'><label class='col-form-label'>Status</label><select id='status_selected' class='form-select'><option>Selecione</option><option value='Ativo'>Ativo</option><option value='Inativo'>Inativo</option></select></div></div></div>");
    });

});    