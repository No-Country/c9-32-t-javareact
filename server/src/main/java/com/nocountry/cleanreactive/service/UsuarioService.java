package com.nocountry.cleanreactive.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.cleanreactive.model.Usuario;
import com.nocountry.cleanreactive.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioService {
	
	private final UsuarioRepository usuarioRepository;
	
	
	public void save(Usuario usuario) {
		usuarioRepository.save(usuario);
	}
	
	public List<Usuario> findAll() {
		return usuarioRepository.findAll();
	}
	
	public Optional<Usuario> findById(String id) {
		return usuarioRepository.findById(id);
	}
	
	public void deleteById(String id) {
		usuarioRepository.deleteById(id);
	}
	
}
