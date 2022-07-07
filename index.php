<!doctype html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="#" />
    <title>System registration of 'Users'</title>

    <!-- CSS personalização -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- Jquery -->
    <script src="vendor/components/jquery/jquery.min.js" charset="UFT-8"></script>

    <!-- Boostrap -->
    <link type="text/css" href="vendor/twbs/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <script type="javascript" src="vendor/twbs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/twbs/bootstrap/dist/js/bootstrap.min.js" charset="UFT-8"></script>

    <!-- Datatables -->
    <script src="vendor/datatables/datatables/media/js/jquery.dataTables.min.js" charset="UFT-8"></script>
    <script src="vendor/datatables/datatables/media/js/dataTables.bootstrap4.min.js" charset="UFT-8"></script>
    <link type="text/css" href="vendor/datatables/datatables/media/css/dataTables.bootstrap4.min.css" rel="stylesheet">

    <!-- Script js -->
    <script type="text/javascript" src="assets/js/script.js"></script>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">
</head>

<body>
    <header>
        <br>
        <h3 class='text-center'>CRUD: Ajax, Jquery, Bootstrap e SQl</h3>
        <br>
    </header>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <button id="btnNew" type="button" class="btn btn-info" data-toggle="modal">
                    <span class="material-icons-outlined">add</span>
                </button>
            </div>
        </div>
    </div>
    <br>

    <div class="container box">
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive">
                    <table id="tableusers" class="table table-striped table-bordered table-condensed" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Id user</th>
                                <th>Name User</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Genre</th>
                                <th>Password</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!--Modal para CRUD-->
    <div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="form_user">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="col-form-label">User Name:</label>
                                    <input type="text" class="form-control" id="user_name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="col-form-label">First Name</label>
                                    <input type="text" class="form-control" id="user_firstname">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="col-form-label">Last Name</label>
                                    <input type="text" class="form-control" id="user_lastname">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="col-form-label">Genre</label>
                                    <input type="text" class="form-control" id="user_genre">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="form-group">
                                    <label class="col-form-label">Password</label>
                                    <input type="text" class="form-control" id="user_password">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <label class="col-form-label">Status</label>
                                <select id="status_selected" class="form-select">
                                    <option>Selecione</option>
                                    <option id="user_status">Ativo</option>
                                    <option id="user_status">Inativo</option>
                                </select>
                                <!-- <div class="form-group">
                                    <label class="col-form-label">Status</label>
                                    <input type="text" class="form-control" id="user_status">
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" id="btnSave" class="btn btn-success">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>