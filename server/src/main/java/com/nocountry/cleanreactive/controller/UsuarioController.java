package com.nocountry.cleanreactive.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.cleanreactive.model.Usuario;
import com.nocountry.cleanreactive.service.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UsuarioController {

	private final UsuarioService usuarioService;
	
	@PostMapping("/usuarios")
	public void save(@RequestBody Usuario usuario) {
		usuarioService.save(usuario);
	}
	
	@GetMapping("/usuarios")
	public List<Usuario> findAll() {
		return usuarioService.findAll();
	}
	
	@GetMapping("/usuario/{id}")
	public Usuario findById(@PathVariable String id) {
		return usuarioService.findById(id).get();
	}
	
	@DeleteMapping("/usuario/{id}")
	public void deleteById(@PathVariable String id) {
		usuarioService.deleteById(id);
	}
	
	@PutMapping("/usuarios")
	public void update(@RequestBody Usuario usuario) {
		usuarioService.save(usuario);
	}
}
