package com.example.app03.api.request; import jakarta.validation.constraints.NotBlank; public record CreateLeadRequest(@NotBlank String name, @NotBlank String status) {}
