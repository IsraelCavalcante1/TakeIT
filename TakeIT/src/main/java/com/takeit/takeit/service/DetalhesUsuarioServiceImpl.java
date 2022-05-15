package com.takeit.takeit.service;

import com.takeit.takeit.data.DetalheUsuarioData;
import com.takeit.takeit.model.UsuarioModel;
import com.takeit.takeit.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DetalhesUsuarioServiceImpl implements UserDetailsService {

    private final UsuarioRepository repository;

    public DetalhesUsuarioServiceImpl(UsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UsuarioModel> usuario = repository.findByLogin(username);
        if (usuario.isEmpty()){
            throw new UsernameNotFoundException("Usuário [" + username + "] não encontrado");

        }

        return new DetalheUsuarioData(usuario);
    }
}
