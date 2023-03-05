package com.nocountry.cleanreactive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.mercadopago.MercadoPagoConfig;

@SpringBootApplication
public class CleanreactiveApplication {

	public static void main(String[] args) {
		SpringApplication.run(CleanreactiveApplication.class, args);

		MercadoPagoConfig.setAccessToken(
				"TEST-1296759265903392-022500-2599d62afcdac407df0609cc8d2cc9a2-603582751");
	}

	@Bean
	public WebMvcConfigurer corsMappingConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("https://clean-reactive.vercel.app", "https://dust-busters.netlify.app",
								"http://localhost:5173")
						.allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD")
						.maxAge(3600)
						.allowedHeaders("*")
						.exposedHeaders("*");
			}
		};
	}
}
