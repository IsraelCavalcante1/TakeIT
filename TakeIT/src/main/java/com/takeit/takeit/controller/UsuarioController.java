package com.takeit.takeit.controller;

import com.takeit.takeit.model.UsuarioModel;
import com.takeit.takeit.repository.UsuarioRepository;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/takeit/usuario")
public class UsuarioController {
    private final PasswordEncoder encoder;
    private final UsuarioRepository repository;

    public UsuarioController(PasswordEncoder encoder, UsuarioRepository repository) {
        this.encoder = encoder;
        this.repository = repository;
    }

    @GetMapping("/listarTodos")
    public ResponseEntity<List<UsuarioModel>> listarTodos(){
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping(value ="/criar", consumes = {"*/*"})
    public ResponseEntity<UsuarioModel> salvar(@RequestBody UsuarioModel usuario){
        usuario.setPassword(encoder.encode(usuario.getPassword()));
        return ResponseEntity.ok(repository.save(usuario));
    }

    @GetMapping("/validarSenha")
    public ResponseEntity<Boolean> validarSenha (@RequestParam String login,
                                                 @RequestParam String password){
        Optional<UsuarioModel> optUsuario = repository.findByLogin(login);
        if (optUsuario.isEmpty()){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }

        UsuarioModel usuario = optUsuario.get();
        boolean valid = encoder.matches(password, usuario.getPassword());

        HttpStatus status =  (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        return ResponseEntity.status(status).body(valid);
    }

}
