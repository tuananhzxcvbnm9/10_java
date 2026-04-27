package com.example.app09.api.request; import jakarta.validation.constraints.NotBlank; public record CreatePostRequest(@NotBlank String name, @NotBlank String status) {}
