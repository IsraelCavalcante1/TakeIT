package com.takeit.takeit.controller;

import com.takeit.takeit.model.UsuarioModel;
import com.takeit.takeit.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/takeit/usuario")
public class UsuarioController {
    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }


    @GetMapping("/listarTodos")
    public ResponseEntity<List<UsuarioModel>> listarTodos(){
        return ResponseEntity.ok(service.listarTodos());
    }

    @PostMapping(value ="/criar", consumes = {"*/*"})
    public ResponseEntity<UsuarioModel> salvar(@RequestBody UsuarioModel usuario){
        return ResponseEntity.ok(service.salvar(usuario));

    }

    @GetMapping("/validarSenha")
    public ResponseEntity<Boolean> validarSenha (@RequestParam String email,
                                                 @RequestParam String password){

        boolean valid = service.validarSenha(email, password);
        HttpStatus status =  (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        return ResponseEntity.status(status).body(valid);
    }

}
