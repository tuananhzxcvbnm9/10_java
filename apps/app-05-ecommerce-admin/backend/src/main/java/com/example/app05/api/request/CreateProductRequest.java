package com.example.app05.api.request; import jakarta.validation.constraints.NotBlank; public record CreateProductRequest(@NotBlank String name, @NotBlank String status) {}
