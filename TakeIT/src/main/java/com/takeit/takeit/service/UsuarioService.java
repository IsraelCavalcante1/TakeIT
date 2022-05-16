package com.takeit.takeit.service;

import com.takeit.takeit.exception.NotFoundException;
import com.takeit.takeit.model.UsuarioModel;
import com.takeit.takeit.repository.UsuarioRepository;
import org.hibernate.annotations.NotFound;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private final PasswordEncoder encoder;
    private final UsuarioRepository repository;

    public UsuarioService(PasswordEncoder encoder, UsuarioRepository repository) {
        this.encoder = encoder;
        this.repository = repository;
    }

    public UsuarioModel salvar(UsuarioModel usuario){
        usuario.setPassword(encoder.encode(usuario.getPassword()));
        return repository.save(usuario);
    }

    public List<UsuarioModel>listarTodos(){
       return repository.findAll();
    }

    public Boolean validarSenha(String email, String password){
        Optional<UsuarioModel> optUsuario = repository.findByEmail(email);
        if (optUsuario.isEmpty()){
            throw new IllegalArgumentException();
        }
        UsuarioModel usuario = optUsuario.get();
        return encoder.matches(password, usuario.getPassword());

    }

    public UsuarioModel buscarPorEmail(String email){
        return repository.findByEmail(email).orElseThrow(() -> new NotFoundException("User", email));
    }
    public String usuarioLogado(){
        return (String) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
    }
}
